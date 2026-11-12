---
title: "Flutter 3.50 : ce qu'il faut retenir"
description: "Interopérabilité native stable, WebAssembly sur Safari et Firefox, packages de design découplés, durcissement d'Android et iOS plus réactif."
date: 2026-11-12
tags: [flutter, dart, mobile]
cover: /blog/flutter-3-50/cover.webp
---

> Cet article est basé sur le post officiel de l'équipe Flutter : [What's new in Flutter 3.50](https://flutter.dev/blog/whats-new-in-flutter-3-50), par Emma Twersky (11 novembre 2026). Ce n'est pas une traduction : j'ai sélectionné et reformulé les points qui me semblent les plus importants.

![Flutter 3.50 sort du four avec Interop, Impeller et Genkit](/blog/flutter-3-50/cover.webp)

## Une release portée par la communauté

Avant de parler technique, les chiffres. Sur ce cycle de release, **188 contributeurs**, dont **69 qui contribuaient pour la première fois**, ont intégré plus de **1 200 commits**. Une bonne partie des améliorations dont je parle plus bas viennent directement de membres de la communauté.

Flutter 3.50 sort en même temps que Dart 3.14. Pour l'installer :

```bash
flutter upgrade
```

## Interopérabilité native directe, enfin stable

C'est la grande nouvelle. Jusqu'ici, appeler du code natif passait par les *platform channels* : sérialisation des messages, noms de méthodes sous forme de chaînes, appels forcément asynchrones. Avec 3.50, plusieurs outils deviennent stables :

- **FFIgen** pour C et Objective-C ;
- **JNIgen** pour Java et Kotlin ;
- le **mode d'interopérabilité native de Pigeon**, disponible en préversion, qui s'appuie sur les deux générateurs pour produire des bindings typés sur iOS, macOS et Android.

Concrètement, on peut appeler les API natives directement, y compris **de façon synchrone** ou depuis un **isolate d'arrière-plan**, sans passer par la sérialisation.

![Platform channels versus appels directs JNI/FFI](/blog/flutter-3-50/native-interop.webp)

Le schéma ci-dessus résume la différence : en haut, le chemin classique avec sérialisation des deux côtés ; en bas, l'appel de méthode direct généré par JNI ou FFI.

## Web : WebAssembly partout, et un build plus malin

### WebAssembly sur Safari et Firefox

`flutter build web --wasm` produit à la fois du WebAssembly et du JavaScript, avec repli automatique sur JavaScript pour les navigateurs anciens. Chrome et Edge (137+) exécutent déjà le Wasm par défaut. Avec 3.50, **Safari 26.2+** (macOS et iOS) et **Firefox 147+** offrent **plus de 2 fois le nombre d'images par seconde** de JavaScript sur des benchmarks de widgets lourds.

Ce n'est pas encore activé par défaut, mais on peut l'activer dès maintenant dans `web/flutter_bootstrap.js` :

```js
{{flutter_js}}
{{flutter_build_config}}
_flutter.loader.load({
  config: {
    wasmAllowList: {
      blink: true,
      webkit: true,
      gecko: true,
    },
  },
});
```

### Hachage du contenu

Après un déploiement, certains utilisateurs gardent des fichiers JavaScript périmés en cache. L'option `--web-content-hash` de `flutter build web` ajoute un hash aux noms de fichiers JavaScript, WebAssembly et `build/web/assets/**`. Vous pouvez alors mettre ces fichiers en cache pendant un an (`Cache-Control: public, max-age=31536000, immutable`) et garder `index.html` et `flutter_bootstrap.js` en `no-cache`.

### Anciennes bibliothèques JS interop

`dart:html`, `dart:js`, `dart:js_util` et `package:js` sont désormais dépréciées au profit de `dart:js_interop` et `package:web`, qui fonctionnent en JavaScript comme en WebAssembly. Pour repérer les imports obsolètes dans votre app *et* vos dépendances, ajoutez `--no-deprecated-js-interop` à `flutter build web`, `flutter run` ou `flutter test --platform chrome` : le build échoue immédiatement s'il en reste.

### Mise en page du texte par le navigateur (aperçu)

Développé avec l'équipe Chrome, `WebParagraph` laisse le navigateur gérer la mise en forme du texte au lieu d'embarquer des analyseurs de polices en C++. Résultat : CanvasKit passe d'environ **5,46 Mo à 3,75 Mo**, il n'y a plus de requêtes pour les polices de secours, plus de « tofu » sur les écritures internationales, et les emojis couleur natifs sont rendus correctement.

## Les packages de design sortent du SDK

Après la sortie de `material_ui` et `cupertino_ui` en 1.0 dans Flutter 3.47, la version 3.50 **déprécie** officiellement `package:flutter/material.dart` et `package:flutter/cupertino.dart`, ainsi que leurs délégués de localisation dans `flutter_localizations`. Les nouveaux projets créés avec `flutter create` utilisent maintenant `package:material_ui` par défaut.

![Avant : Material et Cupertino dans le SDK. Après : packages indépendants sur pub.dev](/blog/flutter-3-50/design-packages.webp)

L'intérêt : ces packages peuvent évoluer avec leurs propres versions, indépendamment du SDK. Pour migrer un projet existant, une commande suffit :

```bash
dart fix --apply --code=migrate_design_widgets
```

## Android : sécurité et plateformes natives

### Durcissement des `Intent`

Jusqu'ici, une app Flutter Android acceptait des extras de configuration d'`Intent` envoyés par n'importe quelle autre app installée. En build release, Flutter 3.50 corrige cela : les valeurs `route`, `dart_entrypoint` et `cached_engine_id` venant d'un `Intent` externe sont ignorées, et les flags moteur comme `--dart-flags` sont refusés. Les deep links classiques continuent de fonctionner. En debug, des avertissements sont affichés pour les extras ignorés.

### Hybrid Composition++

HCPP est la nouvelle architecture pour intégrer des vues natives (cartes, web views) sans saccades au défilement ni bugs de saisie de texte. Elle confie la composition directement à Android. Elle est disponible depuis Flutter 3.44 et activée par défaut sur le canal beta, mais exige **Android 14 (API 34) ou plus** et **Impeller sur Vulkan**, avec repli automatique sinon. Pour l'essayer :

```bash
flutter config --enable-hcpp
```

### Kotlin intégré et AGP 9

Les plugins qui appliquent encore manuellement le plugin Gradle Kotlin devront migrer vers le *Built-in Kotlin* d'AGP : ils auront de moins bons scores sur pub.dev et échoueront sous AGP 10. Côté outillage, le plugin Gradle de Flutter a été réécrit sur les API publiques d'AGP 9. Les nouveaux projets utilisent **AGP 9.3.1** et **Gradle 9.5.0**, avec Java 17 minimum et les SDK 36 (compile et target) et 24 (minimum) par défaut.

## iOS et macOS

- **Toucher plus réactif** : grâce à une refonte de la planification des frames, proposée par Matej Knopp, les événements tactiles sont livrés immédiatement et l'image est construite dans le même rafraîchissement. Cela fait gagner **une frame entière de latence** : 16 ms sur un écran 60 Hz, 8 ms sur un écran ProMotion 120 Hz, mesuré jusqu'à l'iPhone 6s de 2015.
- **Débogage sur iOS 27** : le CLI prépare automatiquement un iPhone fraîchement appairé ou mis à jour, fini l'écran blanc tant qu'on n'a pas ouvert Xcode. Avec Xcode 27, `flutter screenshot` refonctionne sur les appareils physiques, pour la première fois depuis iOS 17.
- **Swift Package Manager** : le trunk CocoaPods devient en lecture seule en décembre 2026. Désactiver SPM déclenche désormais un avertissement ; si vous l'aviez désactivé pour contourner un problème, réactivez-le pour vérifier votre configuration.
- **Fin des Mac Intel** : Flutter ne teste plus sur Intel et le CLI affiche un avertissement. Vous pouvez déjà produire des apps macOS Apple Silicon uniquement avec `flutter config --enable-macos-arm64-only`.

## L'IA dans l'outillage et l'écosystème

- **Plugins d'agents officiels** : compétences (*skills*) orientées tâches, configuration du serveur MCP Dart/Flutter, agents spécialisés et règles persistantes, dont une règle de *hot reload* proactive après les modifications sous `lib/`.
- **Skills dans les packages** : les auteurs peuvent livrer un dossier `skills/` dans leur package pub.dev ; les développeurs les récupèrent avec `dart run skills@ get`.
- **Genkit Dart 1.0** : framework stable pour des applications agentiques multi-modèles, avec typage de bout en bout, flux en streaming, appels d'outils et traçage OpenTelemetry.
- **MediaPipe** : un nouveau package pub.dev apporte 20 tâches de vision, audio et texte exécutées directement sur l'appareil, sans latence réseau ni coût d'inférence cloud.

## Dépréciations et changements cassants

À vérifier avant de mettre à jour :

- `material.dart`, `cupertino.dart` et leurs délégués de localisation sont dépréciés ;
- Android release : validation plus stricte des `Intent` et blocage des flags moteur de debug ;
- `DropdownButtonFormField` (dans `material_ui`) gagne une propriété `enabled`, au lieu de passer `null` à `onChanged` ;
- les soft hyphens affichent maintenant un trait d'union visible quand un mot est coupé ;
- les `WidgetSpan` dans du texte de droite à gauche apparaissent dans l'ordre de lecture naturel ;
- sur navigateur mobile, `SafeArea` tient compte des encoches quand `viewport-fit=cover` est défini ;
- la propriété `ignoringSemantics` est supprimée de `IgnorePointer`, `AbsorbPointer` et `SliverIgnorePointer` ;
- `computeDryBaseline` renvoie `null` au lieu de lever une assertion quand l'enfant n'a pas de baseline.

La liste complète est dans les [breaking changes](https://docs.flutter.dev/release/breaking-changes) et les [notes de version](https://docs.flutter.dev/release/release-notes/release-notes-3.50.0).

## Pour conclure

Flutter 3.50 pose des bases importantes : une interop native stable, un web plus rapide, un SDK plus modulaire. Mon conseil : commencez par la migration des packages de design avec `dart fix`, puis testez WebAssembly sur Safari et Firefox si vous ciblez le web.

"use client";
import { useEffect } from "react";

const BADGE_ID = "472a766c-1a10-483f-a68f-941931f247ae";
const SCRIPT_SRC = "https://cdn.credly.com/assets/utilities/embed.js";

export default function CredlyBadge() {
  useEffect(() => {
    // Re-inject the embed script on every mount so client-side navigation
    // also renders the badge.
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div
      data-iframe-width="150"
      data-iframe-height="270"
      data-share-badge-id={BADGE_ID}
      data-share-badge-host="https://www.credly.com"
    />
  );
}

"use client";

import { useEffect } from "react";

export default function LinkedInPageView() {
  useEffect(() => {
    const sendView = () => {
      fetch("/api/linkedin-conversion", {
        method: "POST",
        keepalive: true,
      }).catch(() => {});
    };

    // تأخير الإرسال حتى تفرغ شاشة المتصفح تماماً من الرسم
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      window.requestIdleCallback(sendView);
    } else {
      setTimeout(sendView, 1000);
    }
  }, []);

  return null;
}
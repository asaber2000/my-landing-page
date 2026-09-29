"use client";

import { useEffect } from "react";

export default function OpenAIPageView() {
  useEffect(() => {
    // إرسال التتبع في الخلفية فور تحميل المكوّن في المتصفح
    fetch("/api/openai-conversion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source_url: window.location.href,
      }),
    }).catch((err) => {
      console.error("OpenAI PageView error:", err);
    });
  }, []);

  return null; // مكوّن غير مرئي
}
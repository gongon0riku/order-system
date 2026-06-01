"use client";

import { useEffect, useState } from "react";
import { initLiff } from "../lib/liff";

export default function Home() {
  const [name, setName] = useState("読み込み中...");

  useEffect(() => {
    const initialize = async () => {
      try {
        const liff = await initLiff();

        if (!liff.isLoggedIn()) {
          liff.login();
          return;
        }

        const profile = await liff.getProfile();
        setName(profile.displayName);
      } catch (error) {
        console.error(error);
        setName("LIFF接続エラー");
      }
    };

    initialize();
  }, []);

  return (
    <main style={{ padding: "20px" }}>
      <h1>QR Order System</h1>
      <p>LINE表示名</p>
      <p>{name}</p>
    </main>
  );
}
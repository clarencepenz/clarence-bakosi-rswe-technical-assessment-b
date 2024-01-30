"use client";

import React from "react";
import MainNews from "./components/main-news";
import OtherArticles from "./components/other-articles";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MainNews />
      <OtherArticles />
    </main>
  );
}

"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "@/components/Login";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-3.5 bg-gradient-to-b from-zinc-800">
      <Login />
    </main>
  );
}

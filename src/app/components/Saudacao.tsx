"use client";
import { useEffect, useState } from "react";

export default function Saudacao() {
  const [greeting, setGreeting] = useState<string>("");

  useEffect(() => {
    const hours = new Date().getHours();

    if (hours >= 0 && hours < 12) {
      setGreeting("Bom dia");
    } else if (hours >= 12 && hours < 18) {
      setGreeting("Boa tarde");
    } else {
      setGreeting("Boa Noite");
    }
  }, []);

  return <h1>{greeting}</h1>;
}

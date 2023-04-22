"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 4000);
  }, []);

  return <div>{showMessage && <h1>CONFIGURAÇÕES</h1>}</div>;
}

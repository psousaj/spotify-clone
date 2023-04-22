"use client";
import React, { useState, useRef } from "react";
import { Aside, Draggable, Footer, Header } from "../components/Layout";
import { MainProps } from "../components/types/Types";

export default function Main(props: MainProps) {
  const [isResizing, setIsResizing] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const [width, setWidth] = useState(260);
  const [initialMouseX, setInitialMouseX] = useState(0);

  const minWidth = 120;
  const maxWidth = 380;

  const asideRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  function handleMouseDown(event: React.MouseEvent) {
    setIsResizing(true);
  }

  function handleMouseUp() {
    setIsResizing(false);
    setInitialMouseX(0);
  }

  function handleMouseMove(event: React.MouseEvent) {
    if (isResizing && event.pageX > initialMouseX) {
      const newWidth = event.pageX - 5;
      if (newWidth >= minWidth && newWidth <= maxWidth) {
        setWidth(newWidth);
      } else if (newWidth < minWidth) {
        setWidth(minWidth);
      } else if (newWidth > maxWidth) {
        setWidth(maxWidth);
      }
    }
  }

  return (
    <div className="teste h-full w-screen flex flex-col bg-neutral-900 relative">
      <div
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex flex-grow relative"
      >
        <Aside asideRef={asideRef} width={width} />
        <Draggable divRef={divRef} handleMouseDown={handleMouseDown} />
        <main
          //   style={{ width: `calc(100vw-(${width}/100vw)*100)` }}
          className="flex flex-1 flex-col h-auto relative text-white z-20"
        >
          <section className="container header-info">
            <Header setOpen={setOpen} open={open} />
          </section>
          {props.children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

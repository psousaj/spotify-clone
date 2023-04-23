"use client";
import React, { useState, useRef } from "react";
import { Aside, Draggable, Footer, Header } from "../components/Layout";
import { MainProps } from "../components/types/Types";

export default function Main(props: MainProps) {
  const [isResizing, setIsResizing] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const [width, setWidth] = useState(260);
  const [initialMouseX, setInitialMouseX] = useState(0);

  const minWidth = 140;
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
    <div className="main-container h-full max-w-full flex flex-col bg-neutral-900 relative">
      <div
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex flex-grow relative"
      >
        <Aside asideRef={asideRef} width={width} />
        <Draggable divRef={divRef} handleMouseDown={handleMouseDown} />
        <main className="flex flex-1 flex-col h-full w-full relative text-white z-20 overflow-hidden">
          <section className="container overflow-hidden">
            <Header setOpen={setOpen} open={open} />
            <div>{props.children}</div>
          </section>
          <Footer className="absolute order-3 bottom-0 left-0 w-full bg-neutral-800 border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2" />
        </main>
      </div>
    </div>
  );
}

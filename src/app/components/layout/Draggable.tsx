"use client";
import { useState, useRef, useEffect } from "react";
import "/public/assets/css/aditional.css";

export default function Draggable() {
  const blueRef = useRef<HTMLDivElement>(null);
  const redRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [startLeft, setStartLeft] = useState<number>(0);

  useEffect(() => {
    const blue = blueRef.current;
    const red = redRef.current;
    const parent = parentRef.current;

    if (!blue || !red || !parent) return;

    function handleMouseDown(event: MouseEvent) {
      setIsDragging(true);
      setStartX(event.clientX);
      setStartLeft(blue?.offsetLeft ?? 0);
    }

    function handleMouseMove(event: MouseEvent) {
      if (!isDragging) return;

      const diffX = event.clientX - startX;
      const newLeft = startLeft + diffX;

      // define limites
      const parentWidth = parent ? parent.offsetWidth : 0;
      const minLeft = 100;
      const maxLeft = parentWidth - (blue?.offsetWidth ?? 0) + 30;

      // mantém dentro dos limites
      const clampedLeft = Math.min(Math.max(newLeft, minLeft), maxLeft);

      blue?.style && (blue.style.left = `${clampedLeft}px`);

      if (red) {
        const redWidth = (blue?.offsetLeft ?? 0) - red.offsetLeft;
        red.style.width = `${Math.max(redWidth, 50)}px`;
      }
    }

    function handleMouseUp() {
      setIsDragging(false);
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    blue.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      blue.removeEventListener("mousedown", handleMouseDown);
    };
  }, [isDragging, startX, startLeft]);

  return (
    <div ref={parentRef} className="teste z-30">
      <div
        ref={blueRef}
        style={{
          position: "absolute",
          top: 100,
          left: 150,
          width: 50,
          height: 50,
          backgroundColor: "blue",
          cursor: "move",
        }}
      />
      <div
        ref={redRef}
        style={{
          position: "absolute",
          top: 100,
          left: 100,
          width: 50,
          height: 50,
          backgroundColor: "red",
        }}
      />
    </div>
  );
}

import React from "react";
import { CSSProperties, useEffect } from "react";

interface ModalProps {
  styles?: CSSProperties;
  open: boolean;
  children: React.ReactNode;
}

export default function Modal({ styles, open, children }: ModalProps) {
  return open ? (
    <div style={styles} className="modal p-1 z-30">
      {children}
    </div>
  ) : null;
}

import { CSSProperties, LegacyRef, MouseEventHandler } from "react";

export type DraggableProps = {
  divRef: LegacyRef<HTMLDivElement>;
  handleMouseDown: MouseEventHandler<HTMLDivElement>;
};

export type AsideProps = {
  asideRef: LegacyRef<HTMLElement>;
  width: number;
};

export interface ModalProps {
  styles?: CSSProperties;
  open: boolean;
  children: React.ReactNode;
}

export type AlbumProps = {
  nome: string;
  image?: string;
};

export type HeaderProps = {
  open: boolean;
  setOpen: any;
};

export interface MainProps {
  children: React.ReactNode;
}

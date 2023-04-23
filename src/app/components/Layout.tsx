import {
  DraggableProps,
  AsideProps,
  ModalProps,
  HeaderProps,
} from "./types/Types";
import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Home as HomeIcon,
  Search,
  Library,
  PlusSquare,
  Heart,
  Bookmark,
  StretchHorizontal,
  User,
  ExternalLink,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export function Aside({ asideRef, width }: AsideProps) {
  return (
    <aside
      ref={asideRef}
      style={{ width: `${width}px`, transition: "width 50ms ease-in-out" }}
      className="w-64 p-6 bg-zinc-950 text-sm relative z-20"
    >
      <div className="mac-icons flex items-center gap-4">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
      </div>
      <nav className="home-buttons space-y-5 mt-8">
        <a
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-zinc-200 hover:text-white"
        >
          <HomeIcon />
          Home
        </a>
        <a
          href=""
          className="flex items-center gap-2 text-sm font-semibold text-zinc-200 hover:text-white"
        >
          <Search />
          Search
        </a>
        <a
          href=""
          className="flex items-center gap-2 text-sm font-semibold text-zinc-200 hover:text-white"
        >
          <Library />
          Your Library
        </a>
      </nav>
      <nav className="plus-home-buttons space-y-5 mt-8">
        <a
          href=""
          className="flex items-center gap-2 text-sm font-semibold text-zinc-200 hover:text-white"
        >
          <PlusSquare />
          <span>Criar Playlist</span>
        </a>
        <a
          href=""
          className="flex items-center gap-2 text-sm font-semibold text-zinc-200 hover:text-white"
        >
          <Heart />
          <span>Músicas Curtidas</span>
        </a>
        <a
          href=""
          className="flex items-center gap-2 text-sm font-semibold text-zinc-200 hover:text-white"
        >
          <Bookmark />
          <span>Seus Episódios</span>
        </a>
      </nav>
      <div className="border-t border-zinc-800 my-5"></div>
      <nav className="overflow-y-scroll m-1 h-40 flex flex-col gap-2">
        <a href="">Metal, Nu Metal, Hard e Heavy Rock</a>
        <a href="">Só Rock Bão</a>
        <a href="">Mix Forró</a>
        <a href="">Top Gaming Tracks</a>
        <a href="">Dance Hits</a>
        <a href="">Playlist</a>
        <a href="">Playlist</a>
        <a href="">Playlist</a>
        <a href="">Playlist</a>
        <a href="">Playlist</a>
        <a href="">Playlist</a>
      </nav>
    </aside>
  );
}

export function Draggable({ divRef, handleMouseDown }: DraggableProps) {
  return (
    <div
      ref={divRef}
      onMouseDown={handleMouseDown}
      className="z-30 resizer w-1 relative flex items-center hover:bg-slate-200/80 active:bg-slate-200/80"
    >
      <StretchHorizontal color="#0F0D0D" strokeWidth={1} />
    </div>
  );
}

export function Modal({ styles, open, children }: ModalProps) {
  return open ? (
    <div style={styles} className="modal p-1 z-30">
      {children}
    </div>
  ) : null;
}

export function Header({ open, setOpen }: HeaderProps) {
  return (
    <header className="flex flex-row justify-between h-max py-4 bg-neutral-900/70">
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>
      <div className="flex flex-row gap-1">
        <button className="scale-90 border border-zinc-700 hover:scale-95 hover:border-1 hover:border-white rounded-full p-1 px-3">
          Faça Upgrade
        </button>
        <div className="scale-90 relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-row gap-2 items-center bg-black p-0.5 rounded-full hover:bg-zinc-800/60"
          >
            <div className="bg-zinc-500/40 rounded-full p-1">
              <User />
            </div>
            <span>jp_filho</span>
            <FontAwesomeIcon
              icon={!open ? faCaretDown : faCaretUp}
              color="white"
              className="w-6 h-6"
            />
          </button>
          <Modal
            styles={{
              backgroundColor: "#202020",
              width: "200%",
              minWidth: "100%",
              height: "auto",
              display: "inline-block",
              position: "absolute",
              right: 0,
              marginTop: "0.5rem",
            }}
            open={open}
          >
            <div className="modal-content">
              <ul className="w-full text-sm">
                <li>
                  <Link href="">
                    <button>
                      Conta <ExternalLink />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <button>Perfil</button>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <button>
                      Faça upgrade para o premium <ExternalLink />
                    </button>
                  </Link>
                </li>
                <li>
                  <Link href="/configuracoes">
                    <button>Configurações</button>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <button>Sair</button>
                  </Link>
                </li>
              </ul>
            </div>
          </Modal>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-neutral-800 relative border-t border-zinc-700 p-6 z-20">
      footer -
    </footer>
  );
}

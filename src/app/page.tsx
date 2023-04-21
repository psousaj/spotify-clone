"use client";

import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Heart,
  Home as Homeicon,
  Library,
  PlusSquare,
  Search,
  StretchHorizontal,
  User,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Saudacao from "./components/Saudacao";
import AlbumComponent from "./components/AlbumComponent";
import { useState, useRef } from "react";

export default function Home() {
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(260);
  const [initialMouseX, setInitialMouseX] = useState(0);

  const minWidth = 180;
  const maxWidth = 380;

  const asideRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  function handleMouseDown(event: React.MouseEvent) {
    setIsResizing(true);
    // setInitialMouseX(event.clientX);
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
        className="flex flex-grow bg-slate-300 relative"
      >
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
              href=""
              className="flex items-center gap-2 text-sm font-semibold text-zinc-200 hover:text-white"
            >
              <Homeicon />
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
        <div
          ref={divRef}
          onMouseDown={handleMouseDown}
          className="z-30 resizer w-1 relative flex items-center hover:bg-slate-200/80 "
        >
          <StretchHorizontal color="#0F0D0D" strokeWidth={1} />
        </div>
        <main className="flex flex-1 flex-col h-auto w-auto relative text-white z-20">
          <section className="container header-info">
            <header className="flex flex-row justify-between h-max py-4 bg-neutral-900/70">
              <div className="flex items-center gap-4">
                <button className="rounded-full bg-black/40 p-1">
                  <ChevronLeft />
                </button>
                <button className="rounded-full bg-black/40 p-1">
                  <ChevronRight />
                </button>
              </div>
              <div className="flex flex-row gap-10">
                <button className="border border-x-2 border-x-white rounded-full p-1 px-3">
                  Faça Upgrade
                </button>
                <div>
                  <button className="flex flex-row gap-2 items-center bg-black p-0.5 rounded-full">
                    <div className="bg-zinc-500/40 rounded-full p-1">
                      <User />
                    </div>
                    <span>jp_filho</span>
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      color="white"
                      className="w-6 h-6"
                    />
                  </button>
                </div>
              </div>
            </header>
          </section>
          <section className="container main">
            <div className="my-6 text-3xl font-bold">
              <Saudacao />
            </div>
            <div className="fotoAlbums grid grid-cols-3 gap-4 place-items-center">
              <AlbumComponent nome="Só rock bão" />
              <AlbumComponent nome="Ultimate Rock Gaming" image="album2.jpeg" />
              <AlbumComponent nome="Nice Trip Songs" image="album3.jpeg" />
              <AlbumComponent
                nome="Rádio de Behind Blue Eyes"
                image="album4.jpeg"
              />
              <AlbumComponent
                nome="Rádio de Into the Fire"
                image="album5.jpeg"
              />
              <AlbumComponent
                nome="Metal, NuMetal, Hard e Heavy Rock"
                image="album6.jpeg"
              />
            </div>
          </section>
        </main>
      </div>
      <footer className="bg-neutral-800 relative border-t border-zinc-700 p-6 z-20">
        footer -
      </footer>
    </div>
  );
}

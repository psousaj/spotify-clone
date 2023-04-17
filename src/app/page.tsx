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
  User,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Saudacao from "./components/Saudacao";
import PlayComponent from "./components/PlayComponent";
import {
  useState,
  useRef,
  MouseEventHandler,
  useEffect,
  InputHTMLAttributes,
} from "react";

export default function Home() {
  const [width, setWidth] = useState(266);
  const myRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);

  function handleResize(event: React.ChangeEvent<HTMLInputElement>) {
    setWidth(parseInt(event.currentTarget.value));
  }

  // useEffect(() => {
  //   if (myRef.current) {
  //     myRef.current.style.width = `${width}px`;
  //   }
  // }, [width]);

  useEffect(() => {
    if (myRef.current) {
      myRef.current.style.width = `${width}px`;

      const left = myRef.current.offsetLeft + myRef.current.offsetWidth;
      const top = myRef.current.offsetTop;
      if (inputRef.current) {
        inputRef.current.style.left = `${left}px`;
        inputRef.current.style.top = `${top}px`;
      }
    }
  }, [width]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-neutral-900 relative">
      <div className="flex flex-row gap-20 items-center justify-center  h-5/6 w-auto">
        <aside className="flex border-2 p-2 items-center" ref={myRef}>
          ASIDE
        </aside>
        <div
          className="LayoutResizer__resize-bar LayoutResizer__inline-end"
          ref={inputRef}
        >
          <label className="hidden-visually">
            <input
              className="LayoutResizer__input"
              type="range"
              min="120"
              max="384"
              step="10"
              value={width}
              onChange={handleResize}
            />
          </label>
        </div>
        <main className="flex-1 border-2 p-2">MAIN</main>
      </div>
      {/* <div className="flex absolute w-full h-full">
        <aside className="w-64 p-6 bg-zinc-950 text-sm relative">
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
        <main className="px-8 flex flex-1 flex-col w-auto relative text-white">
          <header className="flex flex-row justify-between h-max py-4 m-none bg-neutral-900/70">
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
          <div className="my-6 text-3xl font-bold">
            <Saudacao />
          </div>
          <div className="fotoAlbums grid grid-cols-3 gap-4">
            <PlayComponent nome="Só rock bão" />
            <PlayComponent nome="Ultimate Rock Gaming" image="album2.jpeg" />
            <PlayComponent nome="Nice Trip Songs" image="album3.jpeg" />
            <PlayComponent
              nome="Rádio de Behind Blue Eyes"
              image="album4.jpeg"
            />
            <PlayComponent nome="Rádio de Into the Fire" image="album5.jpeg" />
            <PlayComponent
              nome="Metal, NuMetal, Hard e Heavy Rock"
              image="album6.jpeg"
            />
          </div>
        </main>
      </div>
      <footer className="bg-neutral-800 relative border-t border-zinc-700 p-6 w-auto">
        footer -
      </footer> */}
    </div>
  );
}

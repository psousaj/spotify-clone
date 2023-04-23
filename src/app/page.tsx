import Main from "./main/page";
import { AlbumComponent, Saudacao } from "./components/Components";
import React from "react";

export default function Home() {
  return (
    <section className="container main">
      <div className="my-6 text-3xl font-bold">
        <Saudacao />
      </div>
      <div className="fotoAlbums grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4 place-items-center">
        <AlbumComponent nome="Só rock bão" />
        <AlbumComponent nome="Ultimate Rock Gaming" image="album2.jpeg" />
        <AlbumComponent nome="Nice Trip Songs" image="album3.jpeg" />
        <AlbumComponent nome="Mix Rock" image="mixrock.jpeg" />
        <AlbumComponent nome="Daily Mix 5" image="dailymix5.jpeg" />
        <AlbumComponent
          nome="Radar de Novidades"
          image="radardenovidades.jpeg"
        />
      </div>
      <div className="flex flex-row items-center justify-center flex-wrap gap-6 mt-8">
        <div className="bg-zinc-800 w-44 h-52 flex items-center text-teal-300">
          -
        </div>
        <div className="bg-zinc-800 w-44 h-52 flex items-center text-teal-300">
          -
        </div>
        <div className="bg-zinc-800 w-44 h-52 flex items-center text-teal-300">
          -
        </div>
        <div className="bg-zinc-800 w-44 h-52 flex items-center text-teal-300">
          -
        </div>
        <div className="bg-zinc-800 w-44 h-52 flex items-center text-teal-300">
          -
        </div>
        <div className="bg-zinc-800 w-44 h-52 flex items-center text-teal-300">
          -
        </div>
        <div className="bg-zinc-800 w-44 h-52 flex items-center text-teal-300">
          -
        </div>
        <div className="bg-zinc-800 w-44 h-52 flex items-center text-teal-300">
          -
        </div>
        <div className="bg-zinc-800 w-44 h-52 flex items-center text-teal-300">
          -
        </div>
        <div className="bg-zinc-800 w-44 h-52 flex items-center text-teal-300">
          -
        </div>
      </div>
    </section>
  );
}

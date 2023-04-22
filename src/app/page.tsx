import Main from "./main/page";
import { AlbumComponent, Saudacao } from "./components/Components";
import React from "react";

export default function Home() {
  return (
    <Main>
      <section className="container main">
        <div className="my-6 text-3xl font-bold">
          <Saudacao />
        </div>
        <div className="fotoAlbums grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4 place-items-center">
          <AlbumComponent nome="Só rock bão" />
          <AlbumComponent nome="Ultimate Rock Gaming" image="album2.jpeg" />
          <AlbumComponent nome="Nice Trip Songs" image="album3.jpeg" />
          <AlbumComponent
            nome="Rádio de Behind Blue Eyes"
            image="album4.jpeg"
          />
          <AlbumComponent nome="Rádio de Into the Fire" image="album5.jpeg" />
          <AlbumComponent
            nome="Metal, NuMetal, Hard e Heavy Rock"
            image="album6.jpeg"
          />
        </div>
      </section>
    </Main>
  );
}

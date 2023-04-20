import Image from "next/image";

type Props = {
  nome: string;
  image?: string;
};

const DEFAULT_IMAGE = "album1.jpeg";

export default function AlbumComponent({ nome, image }: Props) {
  const imgSrc: string = image ? image : DEFAULT_IMAGE;
  return (
    <div className="w-80 h-max flex justify-start items-center gap-5 bg-zinc-800 hover:bg-zinc-700">
      <Image
        alt="album"
        src={"/assets/img/" + `${imgSrc}`}
        width={80}
        height={80}
      />
      <span className="font-semibold">{nome}</span>
    </div>
  );
}

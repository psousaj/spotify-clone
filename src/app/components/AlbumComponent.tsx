import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

type Props = {
  nome: string;
  image?: string;
};

const DEFAULT_IMAGE = "album1.jpeg";

export default function AlbumComponent({ nome, image }: Props) {
  const imgSrc: string = image ? image : DEFAULT_IMAGE;
  return (
    // <div className="relative">
    <div className="player h-fit w-full flex grow justify-start items-center gap-5 bg-zinc-800 hover:bg-zinc-700 max-w-25rem min-w-18rem">
      <Image
        alt="album"
        src={"/assets/img/" + `${imgSrc}`}
        width={80}
        height={80}
      />
      <span className="font-semibold grow">{nome}</span>
      <button style={{ right: "0px" }} className="relative">
        <FontAwesomeIcon
          className="hover:scale-110 player-icon opacity-0"
          icon={faCirclePlay}
          style={{
            color: "#15e048",
            width: "50px",
            height: "50px",
            margin: "15px",
          }}
        />
      </button>
    </div>
  );
}
/* <FontAwesomeIcon
        icon={faCirclePlay}
        size="sm"
        style={{ color: "#15e048" }}
      />
    </div> */

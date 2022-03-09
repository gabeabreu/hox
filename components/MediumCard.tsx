import Image from "next/image";

type Props = {
  img: string,
  text: string
}

export default function MediumCard(props: Props) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-40 w-40 md:h-60 md:w-60 lg:w-80 lg:h-80">
        <Image
          src={props.img}
          layout="fill"
          className="rounded-xl"
          alt="medium card"
        />
      </div>
      <h3 className="mx-5 font-semibold md:text-xl lg:text-2xl">{props.text}</h3>
    </div>
  );
}

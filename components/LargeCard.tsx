import Image from "next/image";

type Props = {
  img: string,
  title: string,
  text: string,
}

export default function LargeCard(props: Props) {
  return (
    <div className="relative py-16">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={props.img}
          alt="large card"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute bottom-20 left-4 bg-[#70707099] p-5 rounded-lg">
        <h3 className="text-4xl mb-3 w-64 text-secondary">{props.title}</h3>
        <button className="text-sm text-secondary bg-soft px-4 py-2 rounded-lg mt-5">
          {props.text}
        </button>
      </div>
    </div>
  );
}

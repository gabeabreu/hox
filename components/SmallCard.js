import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";

export default function SmallCard({ name, rating, city, img }) {
  return (
    <div className="flex m-2 mt-5 space-x-4 rounded-lg cursor-pointer hover:bg-[#f1f1f1] hover:scale-105 trnasition transform duration-200 ease-out">
      {/* left */}
      <div className="relative h-18 w-32">
        <Image
          src={img}
          alt="small card"
          layout="responsive"
          width="32"
          height="18"
          className="rounded-lg"
        />
      </div>

      {/* right */}
      <div>
        <h3 className="font-regular">{name}</h3>
        <h4 className="text-[#777]">{rating}</h4>
      </div>
    </div>
  );
}

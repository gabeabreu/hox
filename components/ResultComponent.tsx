import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

type Props = {
  name: string,
  bookingCompany: string,
  rating: string,
  price: number,
  city: string,
  img: string,
}

export default function ResultComponent(props: Props) {
  return (
    <div className="py-7 px-2" data-cy="hotel">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={props.img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <p className="text-xl">{props.city}</p>
        <h4 className="text-4xl font-semibold">{props.name}</h4>

        <div className="border-b w-50 pt-2">
          <p className="pt-2 text-sm text-soft flex-grow">
            book with {props.bookingCompany}
          </p>
        </div>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center text-primary">
            <StarIcon className="h-5" />
            {props.rating}
          </p>

          <p className="text-lg lg:text-2xl font-semibold pb-2">U${props.price}</p>
        </div>
      </div>
    </div>
  );
}

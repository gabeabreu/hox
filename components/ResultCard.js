import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";

export default function ResultCard({
  img,
  name,
  rating,
  price,
  city,
  bookingCompany,
}) {
  const router = useRouter();

  function openHotel() {
    router.push({
      pathname: "/result",
      query: {
        img: img,
        city: city,
        name: name,
        bookingCompany: bookingCompany,
        rating: rating,
        price: price,
      },
    });
  }

  return (
    <div
      onClick={openHotel}
      className="flex py-7 px-2 border-b border-soft cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t"
    >
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <p>{city}</p>
        <h4>{name}</h4>

        <div className="border-b border-[#a1a1a1] w-40 pt-2">
          <p className="pt-2 text-sm text-soft flex-grow">
            book with {bookingCompany}
          </p>
        </div>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center text-primary">
            <StarIcon className="h-5" />
            {rating}
          </p>

          <p className="text-lg lg:text-2xl font-semibold pb-2">U${price}</p>
        </div>
      </div>
    </div>
  );
}

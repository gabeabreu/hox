import ResultCard from "./ResultCard";

type Hotel = {
  name: string,
  bookingCompany: string,
  rating: string,
  price: number,
  city: string,
  img: string
}

type Props = {
  matchingHotels: Hotel[]
}

export default function ResultsRender({ matchingHotels }: Props) {
  if (matchingHotels.length != 0)
    return (
      <div data-cy="results" className="flex flex-col">
        {matchingHotels.map((hotel) => (
          <ResultCard
            data-cy="resultCard"
            key={hotel.name}
            img={hotel.img}
            name={hotel.name}
            rating={hotel.rating}
            price={hotel.price}
            city={hotel.city}
            bookingCompany={hotel.bookingCompany}
          />
        ))}
      </div>
    );
  else
    return (
      <section data-cy="results" className="flex-grow pt-14 px-6">
        <h2 className="text-5xl font-semibold mt-2 mb-6">No results found</h2>
      </section>
    );
}

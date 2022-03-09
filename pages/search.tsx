import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ResultsRender from "../components/ResultsRender";

type Hotel = {
  name: string,
  bookingCompany: string,
  rating: string,
  price: number,
  city: string,
  img: string
}

type Props = {
  hotels: Hotel[]
}

export default function Search({ hotels }: Props) {
  const router = useRouter();
  const { searchState, guestsNumber } = router.query;


  var matchingHotels = hotels.filter((hotel) => {
    if (searchState == "") return;
    else if (
      hotel.name.toLowerCase().includes((searchState||'').toString().toLowerCase()) ||
      hotel.city.toLowerCase().includes((searchState||'').toString().toLowerCase())
    )
      return hotel;
  });

  return (
    <div>
      <Header
        placeholder={`${searchState} testing ci| ${guestsNumber} guests`}
      />

      <main>
        <section className="flex-grow pt-14 px-6">

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Searching for {searchState}
          </h1>

          <p className="text-xs">
            for {guestsNumber} guests.
          </p>

          <div className="hidden md:inline-flex m-5 space-x-3 text-soft whitespace-nowrap">
            <Filter text={"Pet friendly"} />
            <Filter text={"Nature"} />
            <Filter text={"Night party"} />
            <Filter text={"Relax"} />
          </div>

          {/* results */}
          <ResultsRender matchingHotels={matchingHotels} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const hotels = require("../public/hotelList.json");

  return {
    props: {
      hotels,
    },
  };
}

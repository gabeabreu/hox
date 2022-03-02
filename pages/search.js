import { useRouter } from "next/router";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import ResultCard from "../components/ResultCard";
import ResultsRender from "../components/ResultsRender";

export default function Search({ hotels }) {
  const router = useRouter();
  const { searchState, startDate, endDate, guestsNumber } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM");
  const formattedEndDate = format(new Date(endDate), "dd MMMM");
  const daysRange = `${formattedStartDate} - ${formattedEndDate}`;

  var matchingHotels = hotels.filter((hotel) => {
    if (searchState == "") return;
    else if (
      hotel.name.toLowerCase().includes(searchState.toLowerCase()) ||
      hotel.city.toLowerCase().includes(searchState.toLowerCase())
    )
      return hotel;
  });

  return (
    <div>
      <Header
        placeholder={`${searchState} | ${daysRange} | ${guestsNumber} guests`}
      />

      <main>
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            {daysRange} for {guestsNumber} guests.
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Searching for {searchState}
          </h1>

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

export async function getServerSideProps() {
  const hotels = require("../public/hotelList.json");

  return {
    props: {
      hotels,
    },
  };
}

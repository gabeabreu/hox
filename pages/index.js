import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ hotels, nearby, filters }) {
  return (
    <div className="bg-secondary">
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* nearby */}
        <section className="pt-6">
          <h2 className="font-semibold text-3xl pb-5">Next to you</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4">
            {nearby?.map((item) => (
              <SmallCard
                key={item.name}
                name={item.name}
                rating={item.rating}
                city={item.city}
                img={item.img}
              />
            ))}
          </div>
        </section>

        {/* filters */}
        <section className="pt-5 max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-semibold py-8">Choose your trip</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3">
            {filters.map((item) => (
              <MediumCard key={item.img} img={item.img} text={item.text} />
            ))}
          </div>
        </section>

        {/* second banner(largeCard) */}
        <section>
          <LargeCard
            img="https://raw.githubusercontent.com/gabeabreu/images/main/Frame%2017secndBannerClean.jpg"
            title="The right place in the right moment."
            text="Find the right place"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const nearby = require("../public/nearby.json");
  const filters = require("../public/filters.json");

  return {
    props: {
      nearby,
      filters,
    },
  };
}

import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import FilterHomePage from "../components/FilterHomePage"
import NearbyHomePage from "../components/NeabryHomePage"
import { GetStaticProps } from "next";

type Hotel = {
  name: string,
  bookingCompany: string,
  rating: string,
  price: number,
  city: string,
  img: string
}

type Nearby = {
  nearby: Hotel[]
}

type Filter = {
  img: string,
  text: string
}

type Filters = {
  filters: Filter[]
}

export default function Home(props: (Nearby & Filters)) {

  const {nearby, filters} = props;

  return (
    <div className="bg-secondary">

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">

        <NearbyHomePage nearby={nearby}/>
        <FilterHomePage filters={filters}/>

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

export const getStaticProps: GetStaticProps = async () => {
  const nearby = require("../public/nearby.json");
  const filters = require("../public/filters.json");

  return {
    props: {
      nearby,
      filters,
    },
  };
}

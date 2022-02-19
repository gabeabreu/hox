import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import ResultComponent from "../components/ResultComponent";

export default function Result() {
  const router = useRouter();

  const { img, city, name, bookingCompany, rating, price } = router.query;

  return (
    <div>
      <Header />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <ResultComponent
          img={img}
          city={city}
          name={name}
          bookingCompany={bookingCompany}
          rating={rating}
          price={price}
        />
        <LargeCard
          img="https://raw.githubusercontent.com/gabeabreu/images/main/Frame%2017secndBannerClean.jpg"
          title="The right place in the right moment."
          text="Find the right place"
        />
      </main>

      <Footer />
    </div>
  );
}

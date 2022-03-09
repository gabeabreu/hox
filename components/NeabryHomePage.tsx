import SmallCard from "../components/SmallCard"

interface Hotel {
    name: string,
    bookingCompany: string,
    rating: string,
    price: number,
    city: string,
    img: string
}

type Props = {
    nearby: Hotel[]
}

export default function NearbyHomePage({nearby}: Props) {
    return (
        <section className="pt-6">
          <h2 className="font-semibold text-3xl pb-5">Next to you</h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4"
            data-cy="nearby"
          >
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
    )
}
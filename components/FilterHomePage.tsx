import MediumCard from "./MediumCard"

interface Filter {
    img: string,
    text: string
}

type Props = {
    filters: Filter[]
}

export default function FilterHomePage({filters}: Props) {
  return (
    <section className="pt-5 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold py-8">Choose your trip</h2>
      <div className="flex space-x-3 overflow-scroll scrollbar-hide">
        {filters?.map((item: any) => (
          <MediumCard key={item.img} img={item.img} text={item.text} />
        ))}
      </div>
    </section>
  )
}

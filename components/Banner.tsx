import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://raw.githubusercontent.com/gabeabreu/images/main/sara-dubler-Koei_7yYtIo-unsplash.jpg"
        alt="Banner"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center text-lg">
        <button className="text-secondary bg-[#000000aa] px-10 py-4 shadow-md font-bold my-3 rounded-full hover:shadow-xl active:scale-90 transition duration-150">
          Take a rest with us.
        </button>
      </div>
    </div>
  );
}

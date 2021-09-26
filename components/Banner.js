import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm md:text-xl">Not sure where to go? Perfect.</p>
        <button className="text-purple-900 hover:shadow-xl active:scale-90 transition duration-150 font-bold my-3 bg-white px-10 py-4 rounded-full shadow-md">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;

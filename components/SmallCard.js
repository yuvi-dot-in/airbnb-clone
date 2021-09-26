import Image from "next/image";

const SmallCard = ({ location, imageUrl, distance }) => {
  return (
    <div
      className="flex m-2  items-center space-x-5 mt-5 cursor-pointer hover:scale-105 
     transition duration-200  ease-out rounded-full"
    >
      <div className=" flex relative h-16 w-16">
        <Image src={imageUrl} layout="fill" className="rounded-lg" />
      </div>
      <div className="">
        <h2 className="font-semibold">{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;

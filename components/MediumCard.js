import Image from "next/image";
const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out m-2">
      <div className="relative h-64 w-64 ">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      <h2 className="text-2xl mt-3">{title}</h2>
    </div>
  );
};

export default MediumCard;

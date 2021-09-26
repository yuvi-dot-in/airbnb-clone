import Image from "next/image";
const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative p-10">
      <div className="relative  h-96 w-auto ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 left-20 ">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p className="mb-2">{description}</p>
        <button className="text-sm hover:shadow-lg hover:scale-105  transition duration-300 ease-out text-white bg-gray-900 px-4 py-2 rounded-lg">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;

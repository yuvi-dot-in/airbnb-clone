import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { GlobeAltIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <div
      className=" sticky top-0 z-10 grid grid-cols-3 bg-white shadow p-5 
    md:px-20"
    >
      <div className="relative flex items-center h-8 cursor-pointer my-auto ">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center  border-2 rounded-full  py-1 md:shadow-sm">
        <input
          className="pl-5 text-gray-600 text-sm  outline-none md:flex-grow bg-transparent"
          type="text"
          placeholder="Search Your Location"
        />
        <SearchIcon className=" hidden md:inline-flex h-8 cursor-pointer  bg-red-400 p-2 md:mx-2 text-white rounded-full " />
      </div>
      <div className="flex items-center  space-x-4 justify-end">
        <p className="hidden md:inline-flex cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-5 font-extralight " />
        <div className="flex text-gray-500 items-center   border-2 rounded-full p-1 ">
          <MenuIcon className="h-5 cursor-pointer text-gray-800 px-2" />
          <UserCircleIcon className="h-8 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;

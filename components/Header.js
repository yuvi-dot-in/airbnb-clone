import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { GlobeAltIcon } from "@heroicons/react/outline";
import { useState } from "react";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guest, setGuest] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const reset = () => {
    setSearchInput("");
    setStartDate(new Date());
    setEndDate(new Date());
  };
  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuest: guest,
      },
    });
    reset();
  };

  return (
    <div
      className=" sticky top-0 z-10 grid grid-cols-3 bg-white shadow p-5 
    md:px-20"
    >
      <div
        className="relative flex items-center h-8 cursor-pointer my-auto "
        onClick={() => router.push("/")}
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b ">
            <h2 className="font-semibold text-xl flex-grow">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              value={guest}
              min={1}
              onChange={(e) => setGuest(e.target.value)}
              className="w-12 pl-2 outline-none text-xl text-red-500"
            />
          </div>
          <div className="flex mt-3">
            <button onClick={reset} className=" nb-10 flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={handleSearch} className="flex-grow text-red-500">
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

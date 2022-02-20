import Image from "next/image";
import {
  SearchIcon,
  UsersIcon,
  UserCircleIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
import CommonHead from "./CommonHeader";

export default function Header({ placeholder }) {
  const [searchState, setSearchState] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestsNumber, setGuestsNumber] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  function handleCancelSearch() {
    setSearchState("");
  }

  function search() {
    router.push({
      pathname: "/search",
      query: {
        searchState: searchState,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        guestsNumber,
      },
    });
  }

  return (
    <>
      <CommonHead />

      <header className="sticky top-0 z-50 grid grid-cols-3 bg-secondary shadow-md p-5 md: px-10">
        {/* left */}
        <div className="relative flex items-center h-10">
          <Image
            onClick={() => router.push("/")}
            className="cursor-pointer"
            src="https://raw.githubusercontent.com/gabeabreu/images/main/Frame%209pnglogo.png"
            alt="Header"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>

        {/* middle */}
        <div className="flex items-center md:border-0 rounded-full py-2 md:shadow-inner">
          <input
            value={searchState}
            onChange={(e) => setSearchState(e.target.value)}
            type="text"
            placeholder={placeholder || "Search your hotel"}
            className="flex-grow pl-5 bg-transparent outline-none text-sm text-tertiary"
          />
          <SearchIcon className="hidden h-8 bg-primary text-secondary p-2 rounded-full cursor-pointer md:inline-flex md:mx-2" />
        </div>

        {/* right */}
        <div className="flex items-center justify-end space-x-3 text-soft">
          <p className="cursor-pointer hidden md:inline">Contact us</p>
          <div className="flex shadow-md cursor-pointer rounded-full p-2 items-center space-x-2">
            <MenuIcon className="h-4" />
            <UserCircleIcon className="h-4" />
          </div>
        </div>

        {/* date picker */}
        {searchState && (
          <div className="flex flex-col col-span-3 mx-auto mt-10">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#ec2450"]}
              onChange={handleSelect}
            />

            <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl flex-grow font-semibold">
                Number of guests
              </h2>

              <UsersIcon className="h-5" />
              <input
                type="number"
                min={1}
                value={guestsNumber}
                onChange={(e) => setGuestsNumber(e.target.value)}
                className="w-12 pl-2 text-lg outline-none text-primary"
              />
            </div>
            <div className="flex">
              <button
                onClick={handleCancelSearch}
                className="flex-grow text-soft"
              >
                Cancel
              </button>
              <button
                onClick={search}
                className="flex-grow text-secondary rounded-full h-10 bg-primary"
              >
                Search
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

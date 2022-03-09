import Image from "next/image";
import {
  SearchIcon,
  UsersIcon,
  UserCircleIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useRouter } from "next/router";
import CommonHead from "./CommonHeader";

type Props = {
  placeholder?: string
}

export default function Header({placeholder}: Props) {
  const [searchState, setSearchState] = useState<string>("");
  const [guestsNumber, setGuestsNumber] = useState<number>(1);

  const router = useRouter();

  function handleCancelSearch() {
    setSearchState("");
  }

  function search() {
    router.push({
      pathname: "/search",
      query: {
        searchState: searchState,
        guestsNumber,
      },
    });
    setSearchState(""); //to hide date picker
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
            data-cy="searchBar"
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
          <div
            className="flex flex-col col-span-3 mx-auto mt-10"
            data-cy="datePicker"
          >

            <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl flex-grow font-semibold">
                Number of guests
              </h2>

              <UsersIcon className="h-5" />
              <input
                data-cy="guestsNumber"
                type="number"
                min={1}
                value={guestsNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGuestsNumber(Number(e.target.value))}
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
                data-cy="searchButton"
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

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  const activeClass = "text-[#FFFFF8] border-b border-black";
  const defaultClass = "text-warnaTeksSblmHover";

  return (
    <div>
      {/* navbar 1 */}
      <nav className="flex justify-between px-20 py-3 items-center bg-warnaBg">
        <h1 className="text-xl text-warnaTeksPrimary-800 font-bold">
          <Link href="/">ALdMF Music</Link>
        </h1>
        <div className="flex items-center"></div>
        <div className="flex items-center">
          <ul className="flex items-center space-x-6">
            <li>
              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-warnaTeksPrimary-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-warnaTeksPrimary-500 dark:text-warnaTeksPrimary-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-2 pl-10 text-sm text-warnaTeksPrimary-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="What are you looking for ?"
                    required
                  />
                </div>
              </form>
            </li>

            <ul className="flex space-x-4">
              <li className="relative group">
                <a target="_blank" href="https://aldi.klinikhappykids.com">
                  <span className="hover:opacity-80 transition-opacity duration-300">
                    My Portfolio
                  </span>
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm font-semibold py-1 px-2 rounded-lg transition-opacity duration-300">
                    Web Developer
                  </span>
                </a>
              </li>
              <li className="relative group">
                <a target="_blank" href="https://www.instagram.com/aldiiimf">
                  <img
                    width="28"
                    height="28"
                    src="https://img.icons8.com/ios-filled/50/AE9292/instagram-new--v1.png"
                    alt="instagram-new--v1"
                    className="hover:opacity-80 transition-opacity duration-300"
                  />
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm font-semibold py-1 px-2 rounded-lg transition-opacity duration-300">
                    Instagram
                  </span>
                </a>
              </li>
              <li className="relative group">
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCJk3cbCm938_3gYXA-9pCxw"
                >
                  <img
                    width="28"
                    height="28"
                    src="https://img.icons8.com/ios-filled/50/AE9292/youtube-play.png"
                    alt="youtube-play"
                    className="hover:opacity-80 transition-opacity duration-300"
                  />
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm font-semibold py-1 px-2 rounded-lg transition-opacity duration-300">
                    Youtube
                  </span>
                </a>
              </li>
              <li className="relative group">
                <a
                  target="_blank"
                  href="https://open.spotify.com/artist/1n3Xw0iXi4YEIM2ILuV4vb?si=YMJUqdeSRce5r416ed1pGw"
                >
                  <img
                    width="28"
                    height="28"
                    src="https://img.icons8.com/ios-filled/50/AE9292/spotify.png"
                    alt="spotify"
                    className="hover:opacity-80 transition-opacity duration-300"
                  />
                  <span className="absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm font-semibold py-1 px-2 rounded-lg transition-opacity duration-300">
                    Spotify
                  </span>
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </nav>

      {/* navbar 2 */}
      <nav className="flex justify-start px-20 py-2 items-center bg-warnaBg border-t border-warnaSecondary">
        <div className="flex items-center"></div>
        <div className="flex items-center">
          <ul className="flex items-center space-x-6">
            <li className={`${pathname === "/" ? activeClass : defaultClass}`}>
              <Link
                className="hover:border-b hover:border-white hover:text-[#FFFFF8]"
                href="/"
              >
                Home
              </Link>
            </li>
            <li
              className={`${
                pathname === "/tracks" ? activeClass : defaultClass
              }`}
            >
              <Link
                className="hover:border-b hover:border-white hover:text-[#FFFFF8]"
                href="/tracks"
              >
                Tracks
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

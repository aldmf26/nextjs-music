import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-aldi">
      {/* navbar 1 */}
      <nav class="flex justify-between px-20 py-3 items-center bg-[#141617]">
        <h1 class="text-xl text-[#E6E2DC]-800 font-bold">ALdMF Music</h1>
        <div className="flex items-center"></div>

        <div class="flex items-center">
          <ul class="flex items-center space-x-6">
            <li>
              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-[#E6E2DC]-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-[#E6E2DC]-500 dark:text-[#E6E2DC]-400"
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
                    className="block w-full p-2 pl-10 text-sm text-[#E6E2DC]-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="What are you looking for ?"
                    required
                  />
                </div>
              </form>
            </li>
            <li class="font-semibold text-[#E6E2DC]-900">Home</li>
            <li class="font-semibold text-[#E6E2DC]-900">genres</li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/aldiiimf"
              >
                <img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCJk3cbCm938_3gYXA-9pCxw"
              >
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/youtube-play.png"
                  alt="youtube-play"
                />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://open.spotify.com/artist/1n3Xw0iXi4YEIM2ILuV4vb?si=YMJUqdeSRce5r416ed1pGw"
              >
                <img width="48" height="48" src="https://img.icons8.com/color/48/spotify--v1.png" alt="spotify--v1"/>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* navbar 2 */}
      <nav class="bg-cover bg-center bg-[url('../public/img/bgnav.webp')] flex justify-between px-20 py-10 items-center bg-[#D1D5DB]">
        <div class="flex items-center">
          <div>
            <h1 class="mb-8 uppercase text-3xl font-extrabold leading-none tracking-tight text-grey-900 md:text-4xl lg:text-4xl dark:text-grey">
              Your first hit starts here
            </h1>
            <div className="relative">
              <ul class="flex items-center space-x-3 text-white-500">
                <li class="font-semibold text-[#E6E2DC]-700">
                  What’s trending type beat right now:
                </li>
                <li class="font-semibold text-[#E6E2DC]-700">
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 text-xs font-medium bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-[#E6E2DC]-700 dark:bg-gray-800 dark:border-gray-700 dark:text-[#E6E2DC]-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Old School
                  </a>
                </li>
                <li class="font-semibold text-[#E6E2DC]-700">
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 text-xs font-medium bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-[#E6E2DC]-700 dark:bg-gray-800 dark:border-gray-700 dark:text-[#E6E2DC]-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Arabic
                  </a>
                </li>
                <li class="font-semibold text-[#E6E2DC]-700">
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 text-xs font-medium bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-[#E6E2DC]-700 dark:bg-gray-800 dark:border-gray-700 dark:text-[#E6E2DC]-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Latin
                  </a>
                </li>
                <li class="font-semibold text-[#E6E2DC]-700">
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 text-xs font-medium bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-[#E6E2DC]-700 dark:bg-gray-800 dark:border-gray-700 dark:text-[#E6E2DC]-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Instrumental Hip Hop
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div></div>
      </nav>
    </main>
  );
}

import Navbar from "@/components/Navbar";
import React from "react";

export default function page() {
  return (
    <div>
      <Navbar />
      <main className="grid place-items-center bg-gradient-to-t from-blue-200 to-grey-900 p-5">
        <div>
          <h1 className="px-10 text-1xl sm:text-lg md:text-2xl font-bold text-gray-200 mb-5">
            Explore Tracks
          </h1>
          <section className="px-10 grid grid-cols-2 sm:grid-cols-5 gap-4">
            <div className="bg-gray-900 shadow-lg rounded p-2">
              <div className="group relative">
                <img
                  className="w-full md:w-72 block rounded"
                  src="https://upload.wikimedia.org/wikipedia/en/f/f1/Tycho_-_Epoch.jpg"
                  alt
                />
                <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                  <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      fill="currentColor"
                      className="bi bi-play-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white text-lg">Epoch</h3>
                <p className="text-gray-400">Tycho</p>
              </div>
            </div>
            <div className="bg-gray-900 shadow-lg rounded p-2">
              <div className="group relative">
                <img
                  className="w-full md:w-72 block rounded"
                  src="https://upload.wikimedia.org/wikipedia/en/c/ca/Tycho_-_Awake.png"
                  alt
                />
                <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                  <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      fill="currentColor"
                      className="bi bi-play-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white text-lg">Awake</h3>
                <p className="text-gray-400">Tycho</p>
              </div>
            </div>
            <div className="bg-gray-900 shadow-lg rounded p-2">
              <div className="group relative">
                <img
                  className="w-full md:w-72 block rounded"
                  src="https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg"
                  alt
                />
                <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                  <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={40}
                      height={40}
                      fill="currentColor"
                      className="bi bi-play-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white text-lg">Dive</h3>
                <p className="text-gray-400">Tycho</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* <div className="flex items-center py-10 px-5">
        <div class="w-1/6 h-60 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="p-8 rounded-t-lg"
              src="https://images.unsplash.com/photo-1618537993538-0690d0976a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFwZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt="product image"
            />
          </a>
          <div class="flex justify-center pb-5">
            <a href="#">
              <span class="bg-blue-100 items-center text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-4">
                128 BPM
              </span>
              <h5 class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                Ginto
              </h5>
            </a>
          
          </div>
        </div>
      </div> */}
    </div>
  );
}

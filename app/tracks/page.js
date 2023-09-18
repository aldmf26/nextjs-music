import Navbar from "@/components/Navbar";
import React from "react";

export default function page() {
  const cardsData = [
    {
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/en/f/f1/Tycho_-_Epoch.jpg",
      title: "Ginto",
      bpm: "140",
      free: "Free",
    },
    {
      imageSrc:
        "https://upload.wikimedia.org/wikipedia/en/f/f1/Tycho_-_Epoch.jpg",
      title: "Dive",
      bpm: "160",
      free: "",
    },
  ];

  return (
    <div>
      <Navbar />
      <main className="grid place-items-center bg-warnaBg p-5">
        <div>
          <h1 className="px-10 text-1xl sm:text-lg md:text-2xl font-bold text-gray-200 mb-5">
            Explore Tracks
          </h1>
          <section className="px-10 grid grid-cols-2 sm:grid-cols-5 gap-4">
            {cardsData.map((card, i) => (
              <div className="bg-black shadow-lg rounded p-1 relative">
                <div className="group relative">
                  <img
                    className="w-full md:w-72 block rounded"
                    src={card.imageSrc}
                    alt=""
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
                <div className="p-4 bg-warnaSecondary flex justify-between items-center">
                  <div>
                    <h3 className="text-white text-lg">{card.title}</h3>
                    <span className="text-gray-400 text-sm">
                      {card.bpm} BPM
                    </span>
                  </div>
                  {card.free !== "" && (
                    <span
                      href="#"
                      class="flex items-center justify-center px-3 h-8 text-xs font-medium bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-warnaTeksPrimary-700 dark:bg-gray-800 dark:border-gray-700 dark:text-warnaTeksPrimary-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      
                      {card.free}
                      
                    </span>
                  )}
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

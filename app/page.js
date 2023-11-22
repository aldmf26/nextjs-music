import Navbar from "@/components/Navbar";

export default function Home() {
  const tags = [
    {
      link: "https://upload.wikimedia.org/wikipedia/en/f/f1/Tycho_-_Epoch.jpg",
      name: "Old School",
    },
    {
      link: "https://upload.wikimedia.org/wikipedia/en/f/f1/Tycho_-_Epoch.jpg",
      name: "Arabic",
    },
    {
      link: "https://upload.wikimedia.org/wikipedia/en/f/f1/Tycho_-_Epoch.jpg",
      name: "Latin",
    },
  ];

  return (
    <main className="bg-aldi">
      <Navbar />
      <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center h-80 bg-[url('../public/img/bg.jpg')]">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-4xl font-semibold">
                Your first hit starts here
              </h2>
              <h4 className="mb-6 text-xl text-warnaHeading font-semibold">
                What’s trending type beat right now:
              </h4>
              <div className="relative">
                <ul class="flex items-center space-x-3 text-white-500">
                  {tags.map((tag, i) => (
                    <li class="font-semibold text-warnaTeksPrimary-700">
                      <a
                        href="#"
                        class="flex items-center justify-center px-3 h-8 text-xs font-medium bg-white border border-black rounded-lg hover:bg-gray-100 hover:text-warnaTeksPrimary-700 dark:bg-warnaButton dark:border-gray-700 dark:text-black-400 dark:hover:bg-gray-700 dark:hover:text-warnaHeadline"
                      >
                        {tag.name}
                      </a>
                    </li>
                  ))}

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* jumbotron */}
      {/* <nav class="bg-cover object-left-top bg-[url('../public/img/bg.jpg')] flex justify-between px-20 py-44 items-center">
        <div class="flex items-center text-warnaHeadline">
          <div>
            <h1 class="mb-8 uppercase text-3xl font-extrabold leading-none tracking-tight text-grey-900 md:text-4xl lg:text-4xl dark:text-grey">
              Your first hit starts here
            </h1>
            <div className="relative">
              <ul class="flex items-center space-x-3 text-white-500">
                <li class="font-semibold text-warnaTeksPrimary-700">
                  What’s trending type beat right now:
                </li>
                <li class="font-semibold text-warnaTeksPrimary-700">
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 text-xs font-medium bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-warnaTeksPrimary-700 dark:bg-gray-800 dark:border-gray-700 dark:text-warnaTeksPrimary-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Old School
                  </a>
                </li>
                <li class="font-semibold text-warnaTeksPrimary-700">
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 text-xs font-medium bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-warnaTeksPrimary-700 dark:bg-gray-800 dark:border-gray-700 dark:text-warnaTeksPrimary-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Arabic
                  </a>
                </li>
                <li class="font-semibold text-warnaTeksPrimary-700">
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 text-xs font-medium bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-warnaTeksPrimary-700 dark:bg-gray-800 dark:border-gray-700 dark:text-warnaTeksPrimary-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Latin
                  </a>
                </li>
                <li class="font-semibold text-warnaTeksPrimary-700">
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 text-xs font-medium bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-warnaTeksPrimary-700 dark:bg-gray-800 dark:border-gray-700 dark:text-warnaTeksPrimary-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Instrumental Hip Hop
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav> */}
    </main>
  );
}

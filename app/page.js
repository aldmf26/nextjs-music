import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-aldi">
      <Navbar />

      {/* jumbotron */}
      <nav class="bg-cover bg-center bg-[url('../public/img/bgnav.webp')] flex justify-between px-20 py-16 items-center bg-[#D1D5DB]">
        <div class="flex items-center">
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
      </nav>
    </main>
  );
}

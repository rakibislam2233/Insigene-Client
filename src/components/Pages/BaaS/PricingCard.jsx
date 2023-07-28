const PricingCard = () => {
    return (
        <>
            <section className="pb-10 text-white sm:pb-16 lg:pb-24">
            <div className="px-4 max-w-6xl mx-auto  sm:px-6 lg:px-8">
              <div className="grid max-w-3xl grid-cols-1 gap-6  mx-auto sm:grid-cols-2 mt-14 md:gap-9">
                <div className="overflow-hidden bg-transparent border-2 border-gray-200 rounded-md">
                  <div className="p-6 md:py-8 md:px-9">
                    <h3 className="text-xl font-semibold ">Baas-Pro</h3>

                    <div className="flex items-end mt-5">
                      <div className="flex items-start">
                        <span className="text-xl font-medium "> $ </span>
                        <p className="text-6xl font-medium tracking-tight">
                          4,999
                        </p>
                      </div>
                      <span className="ml-0.5 text-lg "> / month </span>
                    </div>

                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center justify-center w-full px-4 py-3 mt-6 font-semibold  transition-all duration-200 bg-transparent border-2 rounded-full border-[#06A7C7] hover:bg-[#06A7C7] hover:text-white focus:text-white focus:bg-[#06A7C7]"
                      role=""
                    >
                      ENQUIRE NOW
                    </a>

                    <ul className="flex flex-col mt-8 space-y-4">
                      <li className="inline-flex items-center space-x-2">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-base font-medium ">
                          {" "}
                          Cost effective{" "}
                        </span>
                        <svg
                          className="w-4 h-4 ml-0.5 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </li>

                      <li className="inline-flex items-center space-x-2">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-base font-medium ">
                          {" "}
                          End-to-end support{" "}
                        </span>
                      </li>

                      <li className="inline-flex items-center space-x-2">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-base font-medium ">
                          {" "}
                          Reproducible workflows{" "}
                        </span>
                      </li>
                      <li className="inline-flex items-center space-x-2">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-base font-medium ">
                          Fast turnaround times{" "}
                        </span>
                      </li>

                      <li className="inline-flex items-center space-x-2">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <strike className="text-base font-medium text-gray-400">
                          {" "}
                          X2 Dedicated data analysts{" "}
                        </strike>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="overflow-hidden border-white border-2 border-transparent rounded-md">
                  <div className="p-6 md:py-8 md:px-9">
                    <h3 className="text-xl font-semibold ">Baas-Pro</h3>

                    <div className="flex items-end mt-5">
                      <div className="flex items-start">
                        <span className="text-xl font-medium "> $ </span>
                        <p className="text-6xl font-medium tracking-tight">
                          99
                        </p>
                      </div>
                      <span className="ml-0.5 text-lg "> / month </span>
                    </div>

                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center justify-center w-full px-4 py-3 mt-6 font-semibold text-white transition-all duration-200 border-2 border-transparent rounded-full bg-gradient-to-r from-[#06A7C7] to-blue-600 hover:opacity-80 focus:opacity-80"
                      role=""
                    >
                      ENQUIRE NOW
                    </a>

                    <ul className="flex flex-col mt-8 space-y-4">
                      <li className="inline-flex items-center space-x-2">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-base font-medium ">
                          {" "}
                          Cost effective{" "}
                        </span>
                        <svg
                          className="w-4 h-4 ml-0.5 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </li>

                      <li className="inline-flex items-center space-x-2">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-base font-medium ">
                          {" "}
                          End-to-end support{" "}
                        </span>
                      </li>

                      <li className="inline-flex items-center space-x-2">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-base font-medium ">
                          {" "}
                          Reproducible workflows{" "}
                        </span>
                      </li>

                      <li className="inline-flex items-center space-x-2">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-base font-medium ">
                          {" "}
                          Fast turnaround times{" "}
                        </span>
                      </li>

                      <li className="inline-flex items-center space-x-2">
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-base font-medium ">
                          {" "}
                          X2 Dedicated data analysts{" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    );
};

export default PricingCard;
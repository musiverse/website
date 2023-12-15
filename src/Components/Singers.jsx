const Singers = () => {
  return (
    <div
      id="singersSection"
      className="overflow-y-hidden gradient-bg-transactions text-gray-300 overflow-x-hidden"
    >
      <div className="text-center mb-2">
        <h2 className="text-2xl md:text-4xl pt-[50px] bg-gradient-to-r  from-sky-700 via-violet-600 to-pink-400 font-bold bg-clip-text text-transparent">
          Elevate Your Event with Unforgettable Artists
        </h2>
        <hr className="border-t-2 border-violet-700 w-12 mx-auto mt-2" />
      </div>
      <div className="p-2 mx-auto max-w-7xl h-[80vh] md:h-[70vh] space-y-4 md:space-y-0 md:space-x-10 flex flex-col md:flex-row justify-around overflow-y-hidden">
        {/* Added Heading */}

        <div className="flex flex-col justify-center items-start">
          <h1 className="text-3xl md:text-4xl w-full md:max-w-[600px] overflow-y-hidden tracking-wide font-secondary">
            Discover unforgettable artists.
          </h1>
          <p className="pt-3   text-lg w-full md:max-w-[550px] font-secondary text-gray-300">
            Affordable Beats, Unforgettable Moments.
          </p>
          <div className="mt-4 text-blue-300 text-base md:text-lg space-y-3 flex flex-col font-secondary">
            <p className="flex items-center gap-4 overflow-y-hidden">
              🎤 Diverse range of talented artists.
            </p>
            <p className="flex items-center gap-4 overflow-y-hidden ">
              💸 Tailored to fit any budget.
            </p>
            <p className="flex items-center gap-4 overflow-y-hidden ">
              🎶 Tailored to fit any budget.
            </p>
          </div>
        </div>
        <div className="pt-4 md:pt-0 flex flex-1 items-center justify-center md:justify-start mx-auto overflow-y-hidden">
          <img
            src="https://images.pexels.com/photos/210887/pexels-photo-210887.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Singers"
            className="object-contain rounded-2xl border-2 h-[230px] md:h-[400px] w-[600px] max-w-full  "
          />
        </div>
      </div>
    </div>
  );
};

export default Singers;

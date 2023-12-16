const Led = () => {
  return (
    <div className="overflow-y-hidden gradient-bg-transactions text-gray-300 overflow-x-hidden">
      <div className="p-2 pt-7 mx-auto max-w-7xl h-[80vh] md:h-[70vh] space-y-4 md:space-y-0 md:space-x-10 flex flex-col md:flex-row justify-around overflow-y-hidden">
        <div className=" flex flex-col justify-center items-start">
          <h1 className="text-3xl md:text-4xl w-full md:max-w-[600px] overflow-y-hidden tracking-wide font-secondary">
            Illuminate Your Event with Tech.
          </h1>
          <p className="pt-3 text-lg w-full md:max-w-[550px] font-secondary text-gray-300">
            Transform Events with a Tap.
          </p>
          <div className="mt-4 text-blue-300 text-base md:text-lg space-y-3 flex flex-col font-secondary">
            <p className="flex items-center gap-4 overflow-y-hidden">
              💡 Smart LED displays and lights at your fingertips.
            </p>
            <p className="flex items-center gap-4 overflow-y-hidden ">
              📲 App-controlled high-tech gadgets.
            </p>
            <p className="flex items-center gap-4 overflow-y-hidden ">
              🌈 Mesmerizing lighting solutions.
            </p>
          </div>
        </div>
        <div className="pt-4 md:pt-0 flex flex-1 items-center  justify-center md:justify-start mx-auto overflow-y-hidden">
          <img
            src="https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Singers"
            className="object-contain rounded-2xl border-2 h-[230px] md:h-[400px] w-[600px] max-w-full   "
          />
        </div>
      </div>
    </div>
  );
};

export default Led;
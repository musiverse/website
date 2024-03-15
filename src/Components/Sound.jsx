const Sound = () => {
  return (
    <div className="overflow-y-hidden bg-[#171419] text-gray-300 overflow-x-hidden  border-black border-b-[12px]">
      {/*gradient-bg-new1*/}
      <div className="p-2 pt-7 mx-auto max-w-7xl h-[80vh] md:h-[70vh] space-y-4 md:space-y-0 md:space-x-10 flex flex-col md:flex-row justify-around overflow-y-hidden">
        {/* Image Section */}
        <div className="pt-4 md:pt-0 flex flex-1 items-center justify-center md:justify-start mx-auto order-2 md:order-1 overflow-y-hidden">
          <img
            src="https://images.pexels.com/photos/219101/pexels-photo-219101.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Singers"
            className="h-[230px] object-contain rounded-2xl border-white md:h-[400px] w-[600px] max-w-full border-[1px] shadow-2xl shadow-black"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center items-start order-1 md:order-2">
          <h1 className="text-3xl md:text-4xl w-full md:max-w-[600px] overflow-y-hidden tracking-wide font-new2 bg-gradient-to-r  from-[#cc5a00] via-[#cc5a00] to-[#f3ab49] text-transparent bg-clip-text">
            Sound Equipments
          </h1>
          {/* <p className="pt-3 text-lg w-full md:max-w-[550px] font-secondary text-gray-300">
            Access Top-Notch Sound
          </p> */}
          <div className="mt-4 text-blue-200 text-base md:text-lg space-y-3 flex flex-col font-tertiary">
            <p className="flex items-center gap-4 overflow-y-hidden">
              🔊 Seamless sound experience
            </p>
            <p className="flex items-center gap-4 overflow-y-hidden ">
              📱 Tech rider for personalized events
            </p>
            <p className="flex items-center gap-4 overflow-y-hidden ">
              🎵 Crystal-clear audio, powerful bass
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sound;

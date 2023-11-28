import down1 from "../assets/down1.png";

const Download = () => {
  return (
    <div className="flex flex-col md:flex-row gradient-bg-services items-center ">
      <div>
        <img src={down1} alt="mobile" />
      </div>
      <div className="w-[780px] text-white font-tertiary ">
        <p className="font-medium  text-2xl">Download Application</p>
        <p className="w-[300px]">
          Download our mobile app for iOS and android and enjoy unlimited access
          to your favorite music, anytime and anywhere
        </p>
        <div>
          <button>Download</button>
          <button>Download</button>
        </div>
      </div>
    </div>
  );
};

export default Download;

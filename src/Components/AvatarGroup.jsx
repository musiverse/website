import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";

const AvatarGroup = () => {
  return (
    <div className="flex items-center -space-x-6">
      <div className="w-12 h-12 overflow-hidden rounded-full">
        <img
          src={image1}
          alt="Avatar 1"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-12 h-12 overflow-hidden rounded-full ">
        <img
          src={image2}
          alt="Avatar 2"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-12 h-12 overflow-hidden rounded-full ">
        <img
          src={image3}
          alt="Avatar 3"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-12 h-12 overflow-hidden rounded-full ">
        <img
          src={image4}
          alt="Avatar 4"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-12 h-12 bg-slate-500 opacity-30 text-white rounded-full flex items-center justify-center -ml-4">
        <span>+99</span>
      </div>
    </div>
  );
};

export default AvatarGroup;

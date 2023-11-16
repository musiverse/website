import Lottie from "lottie-react";
import animationData from "../assets/star-animation.json";
import animationData1 from "../assets/book.json";
import animationData2 from "../assets/diverse.json";
import animationData3 from "../assets/support.json";
import animationData4 from "../assets/quality.json";
import animationData5 from "../assets/mobile.json";

const About = () => {
  return (
    <div className="flex flex-col items-center space-y-8 bg-gradient-to-t from-orange-900 to-gray-900 via-neutral-800 overflow-hidden h-[300vh] md:h-[130vh]  w-full">
      <div className=" text-4xl font-medium p-4 text-center text-white mt-9">
        Connecting Artists and Music Enthusiasts with Ease!
      </div>
      <div className="antialiased p-2 text-gray-200 font-medium font-primary text-center max-w-4xl">
        At STAGExSPLASH, our mission is to bring music to your doorstep. With
        our user-friendly app, you can effortlessly connect with talented
        musicians, singers, and music systems. We value reliability, quality,
        diversity, and convenience, ensuring that every occasion is filled with
        the perfect rhythm and soul.
      </div>
      <div className="text-2xl font-medium tracking-wide text-white">
        What our app offers you
      </div>
      <div className="max-w-[1240px] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-20 mt-8 font-new">
          {/* Service 1 */}
          <div className="text-center flex flex-col items-center">
            <div className="rounded-full bg-gradient-to-br from-blue-700 via-purple-800 to-pink-900 bg-blend-saturation w-[100px] h-[100px] flex items-center justify-center">
              {/* <img src={image1} alt="Monitor Icon" />*/}
              <Lottie animationData={animationData} />
            </div>
            <div className="mt-3 text-white">
              <div className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-red-500 to-red-900  text-3xl font-black font-primary leading-10 ">
                Instant Access to Talent
              </div>
              <div className="font-normal text-lg text-center tracking-wide text-gray-300 mt-2 leading-6 p-1 font-tertiary">
                Browse and book talented musicians, singers, and music systems
                in just a few taps.
              </div>
            </div>
          </div>
          {/* Service 2 */}
          <div className="text-center flex flex-col items-center">
            <div className="rounded-full bg-gradient-to-tr from-neutral-800 to-orange-700 w-[100px] h-[100px] flex items-center justify-center">
              {/* <img src={image2} alt="Mobile Icon" /> */}
              <Lottie animationData={animationData1} />
            </div>
            <div className="mt-3 text-white">
              <div className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-red-500 to-red-900  text-3xl font-black font-primary leading-10">
                Seamless Booking
              </div>
              <div className="font-normal text-lg text-center tracking-wide text-gray-300 mt-2 leading-6 p-1 font-tertiary">
                Enjoy a hassle-free booking process with our user-friendly
                interface.
              </div>
            </div>
          </div>
          {/* Service 3 */}
          <div className="text-center flex flex-col items-center">
            <div className="rounded-full bg-gradient-to-tr from-neutral-800 to-orange-700 w-[100px] h-[100px] flex items-center justify-center">
              {/* <img src={image3} alt="UX Icon" /> */}
              <Lottie animationData={animationData2} />
            </div>
            <div className="mt-3 text-white">
              <div className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-red-500 to-red-900  text-3xl font-black font-primary leading-10">
                Diverse Music Genres
              </div>
              <div className="font-normal text-lg text-center tracking-wide text-gray-300 mt-2 leading-6 p-1 font-tertiary">
                Choose from a wide range of genres to find the perfect sound for
                your event.
              </div>
            </div>
          </div>
          {/* {service 4} */}
          <div className="text-center flex flex-col items-center">
            <div className="rounded-full bg-gradient-to-br from-blue-700 via-purple-800 to-pink-900 w-[100px] h-[100px] flex items-center justify-center">
              {/* <img src={image4} alt="UX Icon" /> */}
              <Lottie animationData={animationData4} />
            </div>
            <div className="mt-3 text-white">
              <div className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-red-500 to-red-900  text-3xl font-black font-primary leading-10">
                High-Quality Performances
              </div>
              <div className="font-normal text-lg text-center tracking-wide text-gray-300 mt-2 leading-6 p-1 font-tertiary">
                Our curated selection of artists ensures exceptional and
                professional performances.
              </div>
            </div>
          </div>
          {/* {service 5} */}
          <div className="text-center flex flex-col items-center">
            <div className="rounded-full bg-gradient-to-br from-blue-700 via-purple-800 to-pink-900 w-[100px] h-[100px] flex items-center justify-center">
              {/* <img src={image1} alt="UX Icon" /> */}
              <Lottie animationData={animationData3} />
            </div>
            <div className="mt-3 text-white">
              <div className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-red-500 to-red-900  text-3xl font-black font-primary leading-10">
                Customer Support
              </div>
              <div className="font-normal text-lg text-center tracking-wide text-gray-300 mt-2 leading-6 p-1 font-tertiary">
                Our dedicated team is here to assist you throughout the process.
              </div>
            </div>
          </div>
          {/* {service 6} */}
          <div className="text-center flex flex-col items-center">
            <div className="rounded-full bg-gradient-to-tr from-neutral-900 to-orange-800 w-[100px] h-[100px] flex items-center justify-center">
              {/* <img src={image2} alt="UX Icon" /> */}
              <Lottie animationData={animationData5} />
            </div>
            <div className="mt-3 text-white">
              <div className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-red-500 to-red-900  text-3xl font-black font-primary leading-10">
                Personalized Experiences
              </div>
              <div className="font-normal text-lg text-center tracking-wide text-gray-300 mt-2 leading-6 p-1 font-tertiary">
                Tailor the music to suit your event or personal preferences.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

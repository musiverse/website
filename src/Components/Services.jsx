import Circles from "./Circles";

const Services = () => {
  return (
    <div className="h-[110vh] bg-[#030014] flex flex-col justify-center items-center">
      <h2 className="text-2xl md:text-4xl mb-[80px] text-blue-200 font-bold font-new2 tracking-widest">
        Services We Offer!
      </h2>
      <Circles />
    </div>
  );
};

export default Services;

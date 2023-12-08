const Services = () => {
  return (
    <div className="gradient-bg-services  flex gap-[3rem] items-start">
      <section className="flex flex-col gap-[10px] left-section">
        <button className="gradient-bg-sevices active:opacity-100 active:tracking-wider active:p-[0.8rem 0] active:border active:font-bold  opacity-50 w-[11rem] p-[0.75rem 0] text-center font-[1.05rem] capitalize cursor-pointer transition-[0.3s] hover:opacity-100">
          All Services
        </button>
        <button className="gradient-bg-sevices opacity-50 w-[11rem] p-[0.75rem 0] text-center font-[1.05rem] capitalize cursor-pointer transition-[0.3s] hover:opacity-100">
          singers
        </button>
        <button className="gradient-bg-sevices opacity-50 w-[11rem] p-[0.75rem 0] text-center font-[1.05rem] capitalize cursor-pointer transition-[0.3s] hover:opacity-100">
          Sound System
        </button>
        <button className="gradient-bg-sevices opacity-50 w-[11rem] p-[0.75rem 0] text-center font-[1.05rem] capitalize cursor-pointer transition-[0.3s] hover:opacity-100">
          concert
        </button>
      </section>
      <section className="border right-section flex-grow">
        <article className="card"></article>
      </section>
    </div>
  );
};

export default Services;

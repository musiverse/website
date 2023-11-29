import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "How do i sign up?",
      answer:
        "To signup, simply download our app and follow the registration process.It's quick and easy!",
    },
    {
      id: 2,
      question: "How do I bool a musician?",
      answer:
        "Booking a musician is simple. Just open the app,browse through the available options, and select the one that suits your needs. You can then proceed to book and comfirm the musician for your event.",
    },
    {
      id: 3,
      question: "What type of music services do you offfer?",
      answer:
        "We offer a wide range of music services, including hiring musicians, singers, and music systems. Whatever your musical needs may be, we've got you covered!",
    },
    {
      id: 4,
      question: "How do I contact support?",
      answer:
        "If you need any assistance or have any questions, you can reach out to our support team throungh the app. They'll be happy to help you!",
    },
    {
      id: 5,
      question: "Can I cancel my booking?",
      answer:
        "Yes,you can cancel your booking.However,please note that there may be cancellation fees depending on the timing of the caancellation.Refer to our cancelation poilicy for more details.",
    },
  ];
  return (
    <div className="w-screen h-[110vh] md:h-[100vh] gradient-bg-services flex justify-center items-center overflow-hidden">
      <div className="overflow-hidden h-[100%] m-2 text-2xl w-[1480px] font-semibold text-gray-300 font-tertiary flex flex-col items-center lg:flex-row justify-around">
        <div className=" flex flex-col space-y-3">
          <p
            data-aos="fade-down"
            className="overflow-y-hidden text-3xl xl:text-5xl w-[480px] pl-[70px]"
          >
            Frequently Asked Questions
          </p>
          <p
            data-aos="fade-down"
            className="xl:w-[550px] text-base overflow-hidden w-[350px] pl-[70px]"
          >
            Find answers to common questions about how our service works and
            what you can expect.
          </p>
        </div>
        <div className="sm:w-[90%] lg:w-[48%] pt-[-50px] rounded-lg shadow-md">
          {questions.map((q) => (
            <div key={q.id} className="mb-4 last:mb-0">
              <button
                className="w-full text-black text-left text-lg md:text-xl focus:outline-none rounded-lg shadow-md flex justify-between items-center p-4 bg-gray-100"
                onClick={() =>
                  setActiveQuestion(activeQuestion === q.id ? null : q.id)
                }
              >
                {q.question}
                {activeQuestion === q.id ? <FaMinusCircle /> : <FaPlusCircle />}
              </button>
              <AnimatePresence>
                {activeQuestion === q.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 text-sm md:text-xl text-gray-600 ml-4"
                  >
                    <p>{q.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

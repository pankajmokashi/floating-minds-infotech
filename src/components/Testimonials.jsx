import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Nishikant Mokashi",
    title: "Web Developer from 2022 batch",
    text: "I joined HTML, SQL, Java & Advance Java programming course in pune Hadapsar in floating minds Infotech Teaching quality was very excellent also they are providing me daily placement calls teaching faculty well experienced and good learning",
    image: "/nishikant.jpeg",
  },
  {
    name: "Ravindra Patare",
    title: "Web Developer from 2022 batch",
    text: "I have completed my MBA in 2018. I was searching for the course in Digital Marketing then I have joined Floating Minds Infotech. It was very good experience with the training.Chandan sir is very good trainer. I have started my career in Digital Marketing because of FMI. Thank you team FMI.",
    image: "/ravindra.jpg",
  },
  {
    name: "Vaibhav Lonkar",
    title: "Web Developer from 2022 batch",
    text: "Floating Minds Institute is best institute For Digital Marketing course. Worked on live projects. Faculty is very good, knowledgeable, gives attention to every student in the batch.",
    image: "/vaibhav.jpg",
  },
  {
    name: "Abhishek Kotwal",
    title: "Web Developer from 2022 batch",
    text: "Great institute for software testing for both manual as well as automation testing. Faculty has in depth knowledge of testing frameworks like cucumber, robot and selenium web drivers. Training here is done from basic to advanced level, personally would recommend this institute for non-it as well as computer/IT students to begin with Software Testing.",
    image: "/abhishek.png",
  },
  {
    name: "Prathamesh Bhosale",
    title: "Web Developer from 2022 batch",
    text: "floating mind is best institute of digital marketing in Hadapsar. They will providing good knowledge about Digital Marketing.",
    image: "/prathamesh.jpg",
  },
  {
    name: "Sudarshan Patil",
    title: "Web Developer from 2022 batch",
    text: "Floating Minds Infotech (FMI) is the best institute in Pune. Expert Digital Marketing Trainers. Excellent teaching. 100% Job Placement..!",
    image: "/sudarshan.png",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setSeconds((seconds) => seconds + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white sm:px-8 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Students Have To Say
      </h2>
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
          key={seconds}
        >
          <div className="min-h-[275px] w-full max-w-xl text-center mb-4 transition-opacity duration-1000 ease-in-out">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">
              {testimonials[currentIndex].name}
            </h3>
            {/* <p className="text-sm text-gray-400">
              {testimonials[currentIndex].title}
            </p> */}
            <p className="mt-4">{testimonials[currentIndex].text}</p>
          </div>
        </motion.div>
        <div className="flex space-x-4 sm:space-x-8">
          <button
            onClick={handlePrev}
            className="bg-[#23A8B1] p-2 rounded-full hover:scale-90 transition-all"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="bg-[#23A8B1] p-2 rounded-full hover:scale-90 transition-all"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

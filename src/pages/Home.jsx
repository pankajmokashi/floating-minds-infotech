import Animate from "../components/Animate";
import TestimonialCarousel from "../components/Testimonials";
import CourseCards from "../components/CourseCards";
import GrowthChart from "../components/GrowthChart";

function Home() {
  return (
    <div>
      <Animate>
        <section className="flex justify-center mt-16">
          <img
            src="https://www.floatingminds.in/wp-content/uploads/2024/04/FMI-Website-Slider1-scaled.jpg"
            alt=""
          />
        </section>
      </Animate>

      <section className="bg-[#292929] px-4 md:px-8 mt-16">
        <div className="mx-auto max-w-screen-xl lg:px-12 py-16 text-white">
          <Animate>
            <div className="mb-12">
              <h1 className="text-center text-5xl text-bold mb-6">
                Welcome to the Floating Minds Infotech
              </h1>
              <p className="">
                Welcome to Floating Minds Infotech, the best IT training
                institute in Hadapsar, Pune, where we empower aspiring
                professionals with industry-leading skills. As a premier
                software training institute, we offer a range of comprehensive
                courses designed to equip students with the expertise needed in
                today&apos;s competitive tech world. Our flagship programs
                include the Full Stack Java Course, where you can master both
                front-end and back-end development, and the Python Course, which
                prepares you for versatile roles in programming and data
                science. We also specialize in Software Testing, ensuring you
                acquire the skills to deliver high-quality software, and our
                Digital Marketing Course equips you with modern marketing
                strategies to excel in the online world. At Floating Minds
                Infotech, we are committed to delivering hands-on training with
                real-world applications. Our experienced faculty, coupled with
                state-of-the-art infrastructure, ensures that each student
                receives personalized attention and practical knowledge. We also
                provide placement assistance to help you secure top positions in
                the industry. Join the best Software training institute in
                Hadapsar and start your career on the path to success with
                courses designed to meet the demands of today&apos;s evolving IT
                landscape.
              </p>
            </div>
          </Animate>
          <GrowthChart />
        </div>
      </section>

      <section className="px-4 md:px-8 mt-16">
        <div className="mx-auto max-w-screen-xl lg:px-16">
          <h2 className="text-center text-3xl font-bold mb-8">
            Our Popular Courses
          </h2>
          <CourseCards />
        </div>
      </section>

      <Animate>
        <section className="gradient px-4 md:px-8 mt-16">
          <div className="mx-auto max-w-screen-xl lg:px-12 py-16">
            <div>
              <div className="flex justify-center mb-12">
                <div className="w-20 h-1 bg-white rounded-full"></div>
              </div>
              <h4 className="text-white text-2xl sm:text-3xl font-semibold text-center">
                Wish to know more about admissions and updates? Subscribe now!
              </h4>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <input
                  type="email"
                  className="min-w-full xm:min-w-[350px] px-4 py-3 font-medium rounded-xl outline-none"
                  placeholder="Email"
                  required
                />
                <button className="min-w-full xm:min-w-[350px] sm:min-w-0 px-6 py-3 rounded-xl h-full bg-white text-[#6EC1E4] font-semibold">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </section>
      </Animate>

      <Animate>
        <section className="bg-[#292929] px-4 md:px-8 mt-16">
          <div className="mx-auto max-w-screen-xl lg:px-12 py-16">
            <TestimonialCarousel />
          </div>
        </section>
      </Animate>
    </div>
  );
}

export default Home;

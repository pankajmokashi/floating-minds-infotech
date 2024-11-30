import Animate from "./Animate";
import GrowthChart from "./GrowthChart";

function Features() {
  return (
    <div>
      <GrowthChart />
      <Animate>
        <div className="w-full border-t border-gray-700 my-12"></div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <h4 className="min-w-[200px] text-xl font-semibold">
            Mission Statement
          </h4>
          <p className="text-sm lg:text-base">
            At Floating Minds Infotech, our mission is to empower individuals
            with the latest IT skills and knowledge, positioning them as leaders
            in the fast-paced world of technology. Located in the vibrant city
            of Hasapsar, Pune, we are dedicated to providing cutting-edge
            training programs that leverage modern technology and industry best
            practices. Our commitment lies in nurturing talent, fostering
            innovation, and enabling our students to thrive in a dynamic IT
            landscape. Through comprehensive courses, hands-on learning
            experiences, and personalized guidance, we aim to shape the next
            generation of IT professionals equipped to tackle real-world
            challenges and drive meaningful change. Join us at Floating Minds
            Infotech, where learning knows no bounds, and possibilities are
            limitless.
          </p>
        </div>
      </Animate>
      <Animate>
        <div className="w-full border-t border-gray-700 my-12"></div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <h4 className="min-w-[200px] text-xl font-semibold">
            Our Core Values
          </h4>
          <p className="text-sm lg:text-base">
            At Floating Minds Infotech, we are not just a training institute; we
            are the gateway to a bright and successful career in information
            technology. Located in the bustling city of Hasapsar, Pune, we offer
            unparalleled opportunities for aspiring IT professionals to excel
            and thrive in the digital age. With our modern technology-infused
            training programs, expert faculty, and industry-aligned curriculum,
            we provide students with the tools they need to embark on a journey
            towards a fulfilling career in IT. Whether you&apos;re a seasoned
            professional looking to upskill or a fresh graduate eager to
            kickstart your career, Floating Minds Infotech is your trusted
            partner for realizing your ambitions. Join us and unlock endless
            possibilities for growth, innovation, and success in the dynamic
            world of information technology.
          </p>
        </div>
      </Animate>
      <Animate>
        <div className="w-full border-t border-gray-700 my-12"></div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <h4 className="min-w-[200px] text-xl font-semibold">
            Our Philosophy
          </h4>
          <p className="text-sm lg:text-base">
            At Floating Minds Infotech, we believe that education is the
            cornerstone of success in the ever-evolving fields of Information
            Technology and Digital Marketing. Our philosophy is rooted in the
            belief that every individual has the potential to thrive in these
            dynamic industries given the right guidance, resources, and support.
            We are committed to providing comprehensive and cutting-edge
            training courses that not only equip our students with the technical
            skills and knowledge needed to excel but also nurture their
            creativity, critical thinking, and problem-solving abilities. Our
            philosophy centers on fostering a learning environment that
            encourages curiosity, innovation, and continuous growth. We believe
            in empowering our students to embrace change, adapt to new
            technologies, and become lifelong learners who are capable of making
            meaningful contributions to the digital world.
          </p>
        </div>
      </Animate>
    </div>
  );
}

export default Features;

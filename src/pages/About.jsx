import Animate from "../components/Animate";
import Features from "../components/Features";

function About() {
  return (
    <div>
      <section className=" px-4 md:px-8 mt-16">
        <div className="py-16">
          <Animate>
            <h1 className="text-center text-5xl sm:text-7xl font-bold">
              About Us
            </h1>
          </Animate>
        </div>
      </section>

      <section className="bg-[#292929] px-4 md:px-8 mt-16">
        <div className="mx-auto max-w-screen-xl lg:px-12 py-16 text-white">
          <Animate>
            <div>
              <h2 className="text-center text-3xl sm:text-5xl font-semibold mb-8">
                Best IT Training Institute in Hadapar, Pune
              </h2>
              <p className="text-sm sm:text-base">
                Welcome to Floating Minds Infotech, the leading IT training
                institute in Hadapsar, Pune. With a commitment to excellence and
                a passion for nurturing talent, we stand as the foremost
                destination for IT enthusiasts seeking top-tier education. At
                Floating Minds Infotech, we pride ourselves on our comprehensive
                range of courses designed to cater to diverse skill levels and
                interests. Whether you&apos;re a beginner venturing into the
                world of technology or a seasoned professional looking to expand
                your expertise, our expert-led programs are tailored to meet
                your needs. What sets us apart is our unwavering dedication to
                providing unparalleled learning experiences. Through small,
                focused classes and personalized attention, we ensure that each
                student receives the guidance and support they need to succeed.
                Our skilled mentors bring years of industry experience to the
                classroom, offering invaluable insights and practical knowledge
                that prepare our students for real-world challenges. Located in
                the heart of Hadapsar, our state-of-the-art facilities provide
                an ideal environment for immersive learning. Equipped with the
                latest tools and technologies, our labs and classrooms foster
                innovation and collaboration, enabling students to unleash their
                full potential. Join us at Floating Minds Infotech and embark on
                a transformative journey towards a rewarding career in IT.
                Experience the difference of learning with the best and discover
                endless possibilities for success.
              </p>
            </div>
          </Animate>
        </div>
      </section>

      <section className="px-4 md:px-8 mt-16">
        <div className="mx-auto max-w-screen-xl lg:px-12 pb-16">
          <Features />
        </div>
      </section>
    </div>
  );
}

export default About;

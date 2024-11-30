import { Link } from "react-router-dom";
import Animate from "./Animate";

const courses = [
  {
    name: "Full Stack Java Course",
    desc: "The Full Stack Java course covers front-end, back-end development, and database management. Learn Java, Spring, Hibernate, JavaScript, HTML, CSS, and more, preparing you for comprehensive web development roles.",
    img: "/images/full-stack-java.jpg",
    link: "/courses/full-stack-java-course",
  },
  {
    name: "Software Testing",
    desc: "Software testing involves evaluating applications to ensure they function correctly, covering manual and automation testing, with methods like unit, integration, and performance testing to identify and fix bugs.",
    img: "/images/software-testing.jpg",
    link: "/courses/software-testing",
  },
  {
    name: "Digital Marketing",
    desc: "Digital marketing promotes products or services through online channels like social media, SEO, email, and PPC. It helps businesses reach wider audiences, drive traffic, and increase engagement effectively.",
    img: "/images/digital-marketing.jpg",
    link: "/courses/digital-marketing-course",
  },
  {
    name: "Python Course",
    desc: "Python is a powerful, easy-to-learn programming language used for web development, data analysis, AI, and automation. It offers readability, extensive libraries, cross-platform support, and a large community.",
    img: "/images/python.jpg",
    link: "/courses",
  },
  {
    name: "Data Science",
    desc: "Data science involves analyzing and interpreting complex data using statistical techniques, machine learning, and algorithms to gain insights, make predictions, and drive decision-making in various fields like business and healthcare.",
    img: "/images/data-science.jpg",
    link: "/courses",
  },
  {
    name: "C and C++",
    desc: "C is a foundational programming language known for system-level programming, while C++ builds on C with object-oriented features, offering more flexibility for software development, games, and high-performance applications.",
    img: "/images/c-cpp.jpg",
    link: "/courses",
  },
];

function CourseCards() {
  return (
    <div className="grid grid-cols-1 xm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16">
      {courses.map((course, ind) => (
        <Animate key={ind}>
          <div className="mx-auto max-w-sm">
            <div className="overflow-hidden rounded-t-2xl">
              <img
                className="hover:scale-125 transition-all"
                src="https://cdn.prod.website-files.com/66544fbc6453e739fb3e896c/665459ce11f8ae515ae4572e_ux-designing.webp"
                alt=""
              />
            </div>

            <div className="p-2">
              <h3 className="text-lg font-bold mb-1">{course.name}</h3>
              <p className="text-sm line-clamp-5 font-medium text-gray-700">
                {course.desc}
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                to={course.link}
                className="px-6 py-2 rounded-2xl text-xs font-semibold bg-[#23A8B1] text-white hover:scale-90 transition-all"
              >
                Read More
              </Link>
            </div>
          </div>
        </Animate>
      ))}
    </div>
  );
}

export default CourseCards;

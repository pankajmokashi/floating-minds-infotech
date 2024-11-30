import { Link } from "react-router-dom";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className="bg-white pt-16 px-4 md:px-8 border-t border-gray-400">
      <div className="mx-auto max-w-screen-xl pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-12 mb-12 sm:mb-16 text-center">
          <div className="">
            <div className="flex justify-center">
              <Logo />
            </div>
            <p className="mx-auto max-w-sm mt-2 text-sm">
              Unlock your potential with expert-led courses designed to propel
              your career forward. Join us and embark on a transformative
              learning journey tailored to your success in the dynamic world of
              technology.
            </p>
          </div>
          <div>
            <h3 className="h-12 sm:h-16 pt-2 text-xl font-semibold">
              Our Location
            </h3>
            <p className="mx-auto max-w-sm text-sm">
              Office No 203, 2nd Floor, Gandharva Capital, above Hotel
              Kolhapuri, near Sahyadri Hospital, Bhosale Nagar, Hadapsar, Pune,
              Maharashtra 411028
            </p>
            <div>
              <a
                href="https://maps.app.goo.gl/Wp7mVKezMktHo5ek6"
                target="_blank"
                className="text-blue-600 text-sm underline"
              >
                View on google maps
              </a>
            </div>
          </div>
          <div>
            <h3 className="h-12 sm:h-16 pt-2 text-xl font-semibold">
              Quick Link
            </h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/academics">Academics</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="h-12 sm:h-16 pt-2 text-xl font-semibold">
              Contact Us
            </h3>
            <div className="text-sm">
              <p className="mb-2">+91-986 065 8321</p>
              <p className="mb-2">floatingmindsinfotech@gmail.com</p>
              <p>9:30 am - 6:30 pm</p>
            </div>
          </div>
        </div>
        <div className="pb-8 flex flex-col sm:flex-row gap-8 sm:gap-16 items-center justify-center">
          <Link
            className="font-medium px-8 py-2 rounded-2xl border hover:border-black text-[#23A8B1] bg-gray-100"
            to="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <SocialLinks />
        </div>
        <div className="text-center text-xs xm:text-sm">
          Copyright © 2024 Floating Minds Infotech | Powered by Floating Minds
          Infotech.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

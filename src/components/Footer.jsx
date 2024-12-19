import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo";
const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center py-3 md:py-6 gap-y-2 md:gap-y-4 bg-slate-200 w-full rounded-lg">
      <Logo />
      <p className="text-base md:text-lg font-semibold text-gray-900">
        Made with 💗 for 🍕 by{" "}
        <a
          href="https://www.linkedin.com/in/vivek-nag-a125482b2/"
          target="_blank"
          className="text-blue-600 hover:text-blue-800 underline"
          title="mera Linkedin Profile"
        >
          Vivek Nag
        </a>
      </p>
      <div>
        <ul className="flex gap-5 text-sm md:text-base text-gray-700 flex-wrap justify-center">
          <li className="hover:text-purple-600 cursor-pointer">About</li>
          <li className="hover:text-purple-600 cursor-pointer">Career</li>
          <li className="hover:text-purple-600 cursor-pointer">History</li>
          <li className="hover:text-purple-600 cursor-pointer">Services</li>
          <li className="hover:text-purple-600 cursor-pointer">Projects</li>
          <li className="hover:text-purple-600 cursor-pointer">Blog</li>
        </ul>
      </div>

      <div className="flex gap-6 flex-wrap justify-center">
        <FontAwesomeIcon
          icon={faGithub}
          size="xl"
          className="text-gray-600 hover:text-black transition-colors duration-300 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          size="xl"
          className="text-gray-600 hover:text-pink-600 transition-colors duration-300 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faFacebook}
          size="xl"
          className="text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faTwitch}
          size="xl"
          className="text-gray-600 hover:text-purple-600 transition-colors duration-300 cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faTwitter}
          size="xl"
          className="text-gray-600 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Footer;

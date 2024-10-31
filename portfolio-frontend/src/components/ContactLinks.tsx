import { FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6"
import Button from "./Button";
import { FiDownload } from "react-icons/fi";

export interface ContactLinksProps {
  type: string
}



const ContactLinks = ({ type }: ContactLinksProps) => {
  const openEmailClient = () => {
    const email = 'sergiuc.stenfan@gmail.com'
    window.location.href = `mailto:${email}`; // Opens the user's default email client
  };

  return <section>
    <ul

      className={`text-3xl flex flex-${type} gap-[1rem]`}
    >
      <li >
        <a href="https://github.com/sergiusergiu1234">
          <FaGithub className="text-gray-300 hover:text-white  duration-500 hover:scale-150" />
        </a>
      </li>

      <li>
        <a href="https://www.instagram.com/sergiuc.stefan/">
          <FaInstagram className="hover:text-white text-gray-300  duration-500 hover:scale-150 " />
        </a>
      </li>

      <li >
        <a href="https://www.linkedin.com/in/sergiu-catalin-stefan-a5553a196/">
          <FaLinkedinIn className="hover:text-white text-gray-300  duration-500 hover:scale-150" />
        </a>
      </li>
      <li>
        <button onClick={openEmailClient} aria-label="Open email app">
          <FaEnvelope className="hover:text-white text-gray-300  duration-500 hover:scale-150" />
        </button>
      </li>
      <li>
        <a
          href="CV-Stefan-Sergiu-Catalin.pdf"
          download="CV-Stefan-Sergiu-Catalin.pdf"
        >
          <Button className="text-xs flex flex-row w-fit   duration-500 hover:scale-110" variant="secondary">
            <FiDownload className="mr-2 " /> Download CV
          </Button>
        </a>
      </li>
    </ul>
  </section>
}

export default ContactLinks
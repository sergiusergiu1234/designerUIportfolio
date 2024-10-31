import Button from "./Button"
import ContactLinks from "./ContactLinks"
import { FiDownload } from "react-icons/fi";
const LandingComponent = () => {
  return <div className=" " >
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent text-white p-8">
      <div className="flex flex-col items-center">

        <div className="relative z-10 grid sm:grid-cols-1  md:grid-cols-2 gap-10 ">


          <div className="flex flex-col items-center space-y-5 max-w-[100%] sm:max-w-[30vw]">
            <img
              src={process.env.PUBLIC_URL + "/pfp.jpeg"}
              alt="Profile Picture"
              className="sm:w-full w-52 h-auto"
            />

            <div className="flex flex-col items-center space-y-3">
              <ContactLinks type="row" />

            </div>
          </div>


          <div className="flex flex-col items-start justify-start space-y-5 text-lg">
            <label className="text-2xl">Hello!</label>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

          </div>

        </div>


      </div>
    </div>

  </div>
}

export default LandingComponent
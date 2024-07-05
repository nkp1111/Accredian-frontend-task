import { FaChevronDown } from "react-icons/fa6";

import GeneralPadding from "../../components/general-padding";
import Logo from "../../components/logo";
import { navData } from "./data.js"

export default function Header() {
  return (
    <header className="w-full py-3 bg-base-200">
      <GeneralPadding>
        <div className="flex items-center justify-between gap-6">
          <div className="flex gap-[inherit] items-center">
            {/* logo  */}
            <Logo />
            {/* courses  */}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-primary m-1">Courses <FaChevronDown /></div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li><a>Course 1</a></li>
              </ul>
            </div>
          </div>
          <div className="flex gap-[inherit] items-center">
            <nav className="px-0 gap-[inherit]">
              <ul className="flex list-none gap-[inherit] ">
                {navData.map((item, index) => (
                  <li key={index}><a href={item.link}>{item.title}</a></li>
                ))}
              </ul>
            </nav>
            <div className="flex gap-[inherit] items-center">
              <button className="btn btn-ghost">Login</button>
              <button className="btn btn-primary">Try for free</button>
            </div>
          </div>
        </div>
      </GeneralPadding>
    </header>
  )
}

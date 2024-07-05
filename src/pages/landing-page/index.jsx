import { useState } from "react";

import Header from "./header";
import GeneralPadding from "../../components/general-padding";
import PageNavbar from "./navbar";

import { sectionData } from "./data.js";
import backgroundSvg from "../../assets/background-svg.svg";
import backgroundImage from "../../assets/background-image.jpg";
import ReferButton from "../../components/refer-button";
import ReferSection from "./refer-section";


export default function LandingPage() {
  const [currentSection, setCurrentSection] = useState(sectionData[0].title);
  return (
    <main className="w-screen min-h-screen bg-base-100 text-base-content">
      <Header />
      <GeneralPadding>
        <div className="my-10">
          <PageNavbar
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            sectionData={sectionData}
          />

          <div className="hero bg-primary-content/30 mt-5 w-full relative rounded-lg overflow-hidden lg:h-[450px]">
            <div className="overflow-hidden absolute w-full h-full left-0 top-0">
              <img src={backgroundSvg} alt="" />
            </div>
            <div className="hero-content flex-col items-stretch justify-start lg:flex-row-reverse p-0 w-full max-w-full">
              <div className="lg:w-[55%] w-full h-[450px] relative overflow-hidden">
                <img
                  src={backgroundImage}
                  className="w-full shadow-2xl" />
              </div>
              <div className="p-4 px-10 flex-1">
                <h1 className="text-6xl xl:text-7xl font-bold text-neutral mt-8">Let&apos;s Learn <br />& Earn</h1>
                <p className="py-6 text-3xl">
                  Get a chance to win up-to <span className="text-primary font-bold">Rs. 15,000</span>
                </p>
                <ReferButton />
              </div>
            </div>
          </div>

          <div className="mt-10">
            <ReferSection />
          </div>

        </div>
      </GeneralPadding>
    </main>
  )
}

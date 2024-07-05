import { useState } from "react";

import Header from "./header";
import GeneralPadding from "../../components/general-padding";
import PageNavbar from "./navbar";

import { sectionData } from "./data.js";

export default function LandingPage() {
  const [currentSection, setCurrentSection] = useState(sectionData[0].title);
  return (
    <main className="w-screen min-h-screen bg-base-100 text-base-content">
      <Header />
      <GeneralPadding>
        <div className="mt-10">
          <PageNavbar
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            sectionData={sectionData}
          />
        </div>
      </GeneralPadding>
    </main>
  )
}

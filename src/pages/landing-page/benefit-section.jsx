import PropTypes from "prop-types"
import { useState } from "react";
import { FaAngleRight, FaGraduationCap } from "react-icons/fa6";

import ReferButton from "../../components/refer-button";

import { programTypes, programData } from "./data";

export default function BenefitSection({ data }) {
  // const [enrolled, setEnrolled] = useState(true);
  const [selectedProgramType, setSelectedProgramType] = useState("all");

  return (
    <section className="py-5 text-center" id={data.link}>
      <h2 className="text-2xl font-bold">What Are  <span className="text-primary">The Referral Benefits?</span></h2>

      <div className="form-control">
        <label className="label justify-end gap-3 cursor-pointer">
          <span className="label-text">Enrolled</span>
          <input type="checkbox" className="toggle toggle-primary"
            // onChange={(e) => e.target.checked ? setEnrolled(() => true) : setEnrolled(() => false)}
            defaultChecked
          />
        </label>
      </div>

      <div className={"my-5 flex flex-row gap-8 md:gap-10 lg:gap-16"}>
        <ul className="menu bg-base-200 w-64 p-0">
          <li className={`uppercase ${selectedProgramType === "all" ? "bg-primary text-primary-content" : ""}`}
            onClick={() => setSelectedProgramType(() => "all")}><a>All programs <span className="inline-block ms-auto"><FaAngleRight /></span></a></li>

          {programTypes.map(program => (
            <li key={program}
              className={`uppercase ${selectedProgramType === program ? "bg-primary text-primary-content" : ""}`}
              onClick={() => setSelectedProgramType(() => program)}
            ><a>{program} <span className="inline-block ms-auto"><FaAngleRight /></span></a></li>
          ))}
        </ul>

        <ProgramBenefitTable selectedProgram={selectedProgramType} />
      </div>
      <div className="">
        <ReferButton />
      </div>
    </section>
  )
}


export function ProgramBenefitTable({ selectedProgram }) {
  const programToShow = programData.filter(program => selectedProgram === "all" || program.type.includes(selectedProgram))
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead className="bg-primary-content/30">
          <tr>
            <th className="flex-1">Programs</th>
            <th className="w-20">Referrer Bonus</th>
            <th className="w-20">Referee Bonus</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {/* <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr> */}
          {programToShow.slice(0, 8).map((program, index) => (
            <tr key={index}>
              <td className="flex-1 flex items-center gap-3 flex-row">
                <FaGraduationCap className="fill-info" />
                <span>{program.title}</span>
              </td>
              <td className="w-20">{program.referrerBonus}</td>
              <td className="w-20">{program.refereeBonus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

BenefitSection.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
}

ProgramBenefitTable.propTypes = {
  selectedProgram: PropTypes.string.isRequired,
}
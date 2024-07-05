import PropTypes from "prop-types"
import ReferButton from "../../components/refer-button";

import { FaUserPlus, FaClipboardList, FaBriefcase } from "react-icons/fa6";


const referStepData = [
  { id: 1, text: "Submit referrals easily via our website’s referral section.", icon: FaUserPlus },
  { id: 2, text: "Earn rewards once your referral joins an Accredian program.", icon: FaClipboardList, },
  { id: 3, text: "Both parties receive a bonus 30 days after program enrollment.", icon: FaBriefcase, },
]

export default function ReferSection({ data }) {
  return (
    <section className="py-5 text-center" id={data.link}>
      <h2 className="text-2xl font-bold">How do i <span className="text-primary">Refer?</span></h2>
      <div className={"my-16 flex justify-center md:flex-row flex-col items-center gap-8 md:gap-10 lg:gap-16"}>
        {referStepData.map((item, index) => {
          return <ReferStepCircle key={index} icon={item.icon} text={item.text} />
        })}
      </div>
      <div className="">
        <ReferButton />
      </div>
    </section>
  )
}


export function ReferStepCircle({ icon, text }) {
  const Icon = icon;
  return (
    <div className="md:w-64 md:h-64 w-52 h-52 rounded-full shadow-xl flex flex-col gap-3 lg:gap-5 items-center relative overflow-hidden p-5">
      <span className="md:mt-8 mt-4 inline-block"><Icon className="md:w-24 md:h-24 w-16 h-16 fill-primary" /></span>
      <p className="text-wrap">{text}</p>
    </div>
  )
}


ReferSection.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
}

ReferStepCircle.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.any,
}
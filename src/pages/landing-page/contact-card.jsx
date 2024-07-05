
import contactCardBackground from "../../assets/contact-card-background.svg";

import { FaAngleRight } from "react-icons/fa6";

export default function ContactCard() {
  return (
    <article className="card bg-info text-info-content w-full shadow-xl relative overflow-hidden">
      <div className="absolute w-full opacity-50">
        <img src={contactCardBackground} alt="" />
      </div>
      <div className="card-body relative p-10 flex-row gap-10">

        <span className="h-16 w-16 rounded-lg border-4 border-info/60 flex items-center justify-center bg-white">
          <svg className="fill-info" viewBox="-51.2 -51.2 614.40 614.40" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" className="stroke-info" strokeWidth="25.6"><title></title><path d="M458.88,240.87h-3.49c-4.23-106.59-92.24-192-199.84-192s-195.61,85.41-199.84,192H53.12a18,18,0,0,0-18,18v108a18,18,0,0,0,18,18H77.33a72.12,72.12,0,0,0,71.57,64h56v6.25a8,8,0,0,0,8,8h42.67a8,8,0,0,0,8-8V426.6a8,8,0,0,0-8-8H212.88a8,8,0,0,0-8,8v6.28h-56a56.1,56.1,0,0,1-55.45-48h25a18,18,0,0,0,18-18v-108a18,18,0,0,0-18-18h-4c4.18-74.22,65.87-133.33,141.12-133.33s137,59.11,141.12,133.34h-3.12a18,18,0,0,0-18,18v108a18,18,0,0,0,18,18h65.33a18,18,0,0,0,18-18v-108A18,18,0,0,0,458.88,240.87Zm-238,193.73h26.67v12.53H220.88ZM120.45,258.86v108a2,2,0,0,1-2,2H53.12a2,2,0,0,1-2-2v-108a2,2,0,0,1,2-2h65.33A2,2,0,0,1,120.45,258.86ZM255.55,91.53c-84.07,0-153,66.28-157.15,149.33H71.73c4.21-97.76,85.05-176,183.82-176s179.61,78.24,183.82,176H412.7C408.51,157.81,339.62,91.53,255.55,91.53ZM460.88,366.87a2,2,0,0,1-2,2H393.55a2,2,0,0,1-2-2v-108a2,2,0,0,1,2-2h65.33a2,2,0,0,1,2,2Z"></path></g><g id="SVGRepo_iconCarrier"><title></title><path d="M458.88,240.87h-3.49c-4.23-106.59-92.24-192-199.84-192s-195.61,85.41-199.84,192H53.12a18,18,0,0,0-18,18v108a18,18,0,0,0,18,18H77.33a72.12,72.12,0,0,0,71.57,64h56v6.25a8,8,0,0,0,8,8h42.67a8,8,0,0,0,8-8V426.6a8,8,0,0,0-8-8H212.88a8,8,0,0,0-8,8v6.28h-56a56.1,56.1,0,0,1-55.45-48h25a18,18,0,0,0,18-18v-108a18,18,0,0,0-18-18h-4c4.18-74.22,65.87-133.33,141.12-133.33s137,59.11,141.12,133.34h-3.12a18,18,0,0,0-18,18v108a18,18,0,0,0,18,18h65.33a18,18,0,0,0,18-18v-108A18,18,0,0,0,458.88,240.87Zm-238,193.73h26.67v12.53H220.88ZM120.45,258.86v108a2,2,0,0,1-2,2H53.12a2,2,0,0,1-2-2v-108a2,2,0,0,1,2-2h65.33A2,2,0,0,1,120.45,258.86ZM255.55,91.53c-84.07,0-153,66.28-157.15,149.33H71.73c4.21-97.76,85.05-176,183.82-176s179.61,78.24,183.82,176H412.7C408.51,157.81,339.62,91.53,255.55,91.53ZM460.88,366.87a2,2,0,0,1-2,2H393.55a2,2,0,0,1-2-2v-108a2,2,0,0,1,2-2h65.33a2,2,0,0,1,2,2Z"></path></g></svg>
        </span>

        <div>
          <h2 className="card-title">Want to delve deeper into the program?</h2>
          <p className="mt-3">Share your details to receive expert insights from our program team!</p>
        </div>

        <div className="card-actions ms-auto">
          <button className="btn bg-info-content text-info font-bold">Get in touch <FaAngleRight /></button>
        </div>
      </div>
    </article>
  )
}

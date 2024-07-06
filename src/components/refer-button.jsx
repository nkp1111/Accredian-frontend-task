import { useForm } from "react-hook-form"
import { useState, useEffect } from "react";

import { programData } from "../pages/landing-page/data";
import { notify } from "../lib/alert";
import { sendRefer } from "../services/referrel.js";

export default function ReferButton() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    // on form submit
    const { fromEmail, toEmail, program } = data;
    if (!fromEmail || !toEmail || !program) return;
    // create new store
    sendRefer({ program, referrer: fromEmail, referee: toEmail })
      .then(data => {
        if (data && data.success) {
          notify(data.success || "successfully referred", "success");
        }
        notify(data.error || "Something went wrong, please try again", "error");
      })
      .catch(error => {
        notify(error?.response?.data?.error || "Something went wrong, please try again", "error");
      })
  }

  const programSelected = watch("program");
  const [bonuses, setBonuses] = useState({ from: programData[0].referrerBonus, to: programData[0].refereeBonus });
  useEffect(() => {
    const program = programData.find(program => program.title === programSelected);
    if (program) {
      setBonuses(() => ({ to: program.refereeBonus, from: program.referrerBonus }))
    }
  }, [programSelected]);
  return (
    <>
      <button
        className="btn btn-primary btn-md px-10"
        onClick={() => document.getElementById('my_modal_1').showModal()}
      >
        Refer now
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Enter Referer info</h3>
          <p className="py-4"></p>

          <form
            action=""
            className="gap-2 flex flex-col"
            noValidate
            onSubmit={handleSubmit(onSubmit)}>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base">Referrer email (yours)</span>
                <span>Bonus: {bonuses.from}</span>
              </div>
              <input
                type="email"
                placeholder="Enter email"
                className="input input-bordered w-full"
                {...register("fromEmail", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  }
                })}
              />
              {errors.fromEmail && <p className="text-red-500 text-sm mt-1">{errors.fromEmail.message}</p>}
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-base">Referee email (companion)</span>
                <span>Bonus: {bonuses.to}</span>
              </div>
              <input
                type="email"
                placeholder="Enter referee email"
                className="input input-bordered w-full"
                {...register("toEmail", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  }
                })}
              />
              {errors.toEmail && <p className="text-red-500 text-sm mt-1">{errors.toEmail.message}</p>}
            </label>


            <label className="from-control flex flex-col gap-2 w-full relative" htmlFor="country">
              <div className="label p-0">
                <span className="label-text text-base cursor-pointer">Program</span>
              </div>
              <select className="select select-primary w-full" {...register("program", {
                required: {
                  value: true,
                  message: "Please select a program",
                }
              })}>
                {programData.map((item, index) => (
                  <option key={index} value={item.title}>{item.title}</option>
                ))}
              </select>

              {errors.program && <p className="text-red-500 text-sm mt-1">{errors.program.message}</p>}
            </label>


            <button className="btn btn-primary btn-block mt-2 text-base">
              Refer now
            </button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}

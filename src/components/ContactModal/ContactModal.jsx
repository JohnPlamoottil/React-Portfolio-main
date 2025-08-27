import emailjs from "@emailjs/browser";
import { useRef } from "react";
// import { motion, spring } from "framer-motion";
import { useForm } from "react-hook-form";
import ReusableModal from "../Modal/Modal";

const ContactModal = ({ closeModal, handleOpenMessageModal }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    closeModal();
    handleOpenMessageModal();

    emailjs
      .sendForm(
        "service_vdm5a5m",
        "template_tl6tbym",
        form.current,
        "udk-SemjUq2isqeia"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const {
    register,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const Feedback = ({ className, message }) => {
    return (
      <>
        <p
          className={`text-left text-error-message text-[#FF4040] ${className}`}
        >
          {message}
        </p>
      </>
    );
  };

  const Submit = ({ title, className }) => {
    return (
      <div className="flex justify-center pt-8 pb-5">
        <button
          onClick={sendEmail}
          className={`font-[Poppins] text-lg w-full rounded-[10px] py-4 px-4 border-black border-[1px] text-white bg-black  hover:scale-105 ease-out duration-75 ${className}`}
          type="submit"
        >
          {title}
        </button>
      </div>
    );
  };

  const SubmitInvalid = ({ title, className }) => {
    return (
      <div className="flex justify-center pt-8 pb-5">
        <button
          className={`font-[Poppins] text-lg w-full rounded-[10px] py-4 px-4 border-black border-[1px] text-white bg-black opacity-50 cursor-not-allowed ${className}`}
          type="submit"
        >
          {title}
        </button>
      </div>
    );
  };

  return (
    <ReusableModal>
      <button
        onClick={closeModal}
        className="text-black text-[20px] font-semibold posiiton: absolute w-[30px] h-[30px] bg-no-repeat top-3 right-3"
      >
        X
      </button>
      <div className="w-[250px] md:w-[400px] mt-[20px]">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col align-middle gap-[10px]"
        >
          <h1 className="font-[Poppins] text-center text-black text-[30px] font-semibold md:text-[50px]">
            Contact me
          </h1>
          <label className="font-[Poppins] text-black text-[16px] font-semibold">
            Name
          </label>
          <input
            {...register("name", {
              required: "We need to know who you are :)",
              minLength: {
                value: 2,
                message: "Use 2 or more characters",
              },
            })}
            onChange={(evt) => {
              setValue("name", evt.target.value, { shouldValidate: true });
            }}
            // eslint-disable-next-line react/no-unknown-property
            isValid={!errors.name}
            className="border-black border-[1px] p-[7px] rounded-[10px] text-black bg-white"
            type="name"
            name="user_name"
            placeholder="Your name"
            minLength="3"
            required
          ></input>
          {errors.name && <Feedback message={errors.name.message} />}
          <label className="font-[Poppins] text-black text-[16px] font-semibold">
            Email
          </label>
          <input
            // eslint-disable-next-line react/no-unknown-property
            errors={errors}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /[\w\-.]+@([\w\\-]+\.)+[\w\\-]{2,4}/,
                message: "Invalid Email",
              },
            })}
            onChange={(evt) => {
              setValue("email", evt.target.value, { shouldValidate: true });
            }}
            className="border-black border-[1px] p-[7px] rounded-[10px] text-black bg-white"
            type="email"
            name="user_email"
            placeholder="Your email"
            required
          ></input>
          <label className="font-[Poppins] text-black text-[16px] font-semibold">
            Your Message
          </label>
          <textarea
            {...register("message", {
              minLength: {
                value: 20,
                message: "Dont be shy. Put some more",
              },
            })}
            onChange={(evt) => {
              setValue("message", evt.target.value, { shouldValidate: true });
            }}
            // eslint-disable-next-line react/no-unknown-property
            isValid={!errors.message}
            className="border-[1px] border-black p-[7px] rounded-[10px] text-black h-[100px] bg-white"
            placeholder="Type your message"
            name="message"
            minLength="4"
            maxLength="100"
            required
          ></textarea>
          {isValid ? (
            <Submit title={"Submit"} />
          ) : (
            <SubmitInvalid title={"Submit"} />
          )}
        </form>
      </div>
    </ReusableModal>
  );
};

export default ContactModal;

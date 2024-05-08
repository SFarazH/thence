import { React, useState } from "react";
import { VscClose } from "react-icons/vsc";
import { AiFillExclamationCircle } from "react-icons/ai";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo.svg'

export default function Form() {
  const [successMsg, setSuccess] = useState(false);
  const [redirectTimer, setRedirectTimer] = useState(5);
  const FormDiv = () => {
    const [isDisable, setDisable] = useState(true);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
    });
    const [errorMessage, setErrorMessage] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      const updatedFormData = { ...formData, [name]: value };
      const allFilled = Object.values(updatedFormData).every(
        (field) => field.trim() !== ""
      );
      setDisable(!allFilled);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!formData.email.includes("@")) {
        setErrorMessage(true);
        return;
      }
      setErrorMessage(false);
      setSuccess(true);
      startRedirectTimer();
    };

    const startRedirectTimer = () => {
      const intervalId = setInterval(() => {
        setRedirectTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      setTimeout(() => {
        clearInterval(intervalId);
        navigate("/");
      }, 5000);
    };

    return (
      <div className="w-1/2 mx-auto">
        <div className="text text-center mb-6">
          <span className="text-[#2da950] text-3xl covered">
            Registration Form
          </span>
          <p className="text-5xl font-semibold manrope">
            Start your sucess <br /> Journey here!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white text-center pt-6 pb-8 mb-6"
        >
          <div className="mb-4">
            <input
              className="appearance-none border rounded-full w-5/12 p-4 text-gray-700 bg-[#EFEFEF] focus:outline-none manrope text-s"
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              className={`appearance-none border rounded-full w-5/12 p-4 text-gray-700 ${
                errorMessage ? "bg-[#F5F8FF] border-[#537FF1]" : "bg-[#EFEFEF]"
              } focus:outline-none manrope text-s`}
              id="email"
              type="text"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errorMessage && (
              <div className="w-5/12 pt-3 mx-auto text-left flex">
                <AiFillExclamationCircle color="#FF0808" className="mr-1" />
                <p className="text-[#FF0808] text-xs ">
                  Enter a valid email address
                </p>
              </div>
            )}
          </div>

          <button
            className="text-white rounded-full focus:outline-none focus:shadow-outline rounded-full w-5/12 mt-4 p-4 bg-black disabled:bg-[#cacaca] manrope"
            type="submit"
            disabled={isDisable}
          >
            Submit
          </button>
        </form>
      </div>
    );
  };

  const Success = () => {
    return (
      <>
        <div className="w-1/2 mx-auto flex justify-center mt-8">
          <div className="text-center ">
            <RiCheckboxCircleFill
              className="mx-auto my-3 mb-10"
              size="4em"
              color="#28B246"
            />
            <div>
              <span className="text-[#2DA950] text-3xl covered mt-8">
                Success Submitted
              </span>
              <p className="manrope text-5xl font-semibold my-3">
                Congratulations
              </p>
              <p className="manrope text-xl px-36 mt-4 text-[#727272]">
                Your request has been successfully submitted to us. We will
                validate your information and reach out to your shortly with
                updates
              </p>
            </div>
            <p className="mt-40 manrope text-[#727272] font-medium text-[20px]">
              Redirecting you to Homepage in{" "}
              <span className="text-black font-bold">
                {redirectTimer} Seconds
              </span>
            </p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="my-4 bg-white flex justify-between h-24 mx-4 px-4 ">
        <div>
          <img src={logo} alt="" />
        </div>
        {!successMsg && (
          <div>
            <Link to="/">
              <VscClose
                size="2.3em"
                className="border rounded-full border-[#CACACA] p-1"
              />
            </Link>
          </div>
        )}
      </div>
      {successMsg ? <Success /> : <FormDiv />}
    </>
  );
}

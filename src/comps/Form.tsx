import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { PuffLoader } from "react-spinners";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({
    fnErr: "",
    lnErr: "",
    emailErr: "",
    messageErr: "",
  });
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState("");
  const [status, setStatus] = useState("");

  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    message: message,
  };

  const onChange = (value: string | null) => {
    if (value !== null) {
      setRecaptchaValue(value);
    } else {
      setRecaptchaValue("");
    }
  };

  const validateFirstName = () => {
    if (!firstName) return "First name is required";
    return "";
  };

  const validateLastName = () => {
    if (!lastName) return "Last name is required";
    return "";
  };

  const validateEmail = () => {
    if (!email) return "Email is required";
    return "";
  };

  const validateMessage = () => {
    if (!message) return "Message is required";
    return "";
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const fnErr = validateFirstName();
    const lnErr = validateLastName();
    const emailErr = validateEmail();
    const messageErr = validateMessage();

    setFormErrors({
      fnErr,
      lnErr,
      emailErr,
      messageErr,
    });

    if (fnErr || lnErr || emailErr || messageErr) {
      alert("Error validating the form!");
      return;
    }

    if (!recaptchaValue) {
      alert("Enter the captcha");
      return;
    }

    try {
      setIsSubmiting(true);

      // Change this to your Formspree endpoint
      const response = await fetch(
        "https://formspree.io/f/xvgkglab", // Replace YOUR_FORM_ID with your actual form ID
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        setStatus("error sending the data");
        setIsSubmiting(false);
        return;
      }

      setIsSubmiting(false);
      setShowMessage(true);

      // Hide the success message after 5 seconds
      setTimeout(() => {
        setShowMessage(false);
      }, 5000);

      // Reset the form
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      setIsSubmiting(false);
    }
  };

  return (
    <form
      method="POST"
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xvgkglab"
      className="pageclip-form flex flex-col  my-8 relative"
    >
      {isSubmiting ? (
        <div className="flex justify-center items-center my-8">
          <PuffLoader size={200} color="white" />
        </div>
      ) : (
        <>
          <div className="flex justify-between space-x-8 mb-6">
            <input
              onBlur={() =>
                setFormErrors((prev) => ({
                  ...prev,
                  fnErr: validateFirstName(),
                }))
              }
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              name="firstName"
              className={`input rounded-lg bg-secondary w-1/2 text-highlight px-4 py-2 placeholder:text-brighterHighlight/50 outline-none transition-all ${
                formErrors.fnErr
                  ? "ring-2 ring-red-500"
                  : "focus:ring-1 ring-amber-800"
              }`}
              placeholder="Your first name"
            />
            <input
              onBlur={() =>
                setFormErrors((prev) => ({
                  ...prev,
                  lnErr: validateLastName(),
                }))
              }
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              name="lastName"
              className={`input rounded-lg bg-secondary w-1/2 text-highlight px-4 py-2 placeholder:text-brighterHighlight/50 outline-none transition-all ${
                formErrors.lnErr
                  ? "ring-2 ring-red-500"
                  : "focus:ring-1 ring-amber-800"
              }`}
              placeholder="Your last name"
            />
          </div>

          <input
            onBlur={() =>
              setFormErrors((prev) => ({ ...prev, emailErr: validateEmail() }))
            }
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            name="email"
            className={`input rounded-lg bg-secondary flex-1 text-highlight px-4 py-2 placeholder:text-brighterHighlight/50 outline-none mt-2 mb-6 transition-all ${
              formErrors.emailErr
                ? "ring-2 ring-red-500"
                : "focus:ring-1 ring-amber-800"
            }`}
            placeholder="Your email address"
          />

          <textarea
            onBlur={() =>
              setFormErrors((prev) => ({
                ...prev,
                messageErr: validateMessage(),
              }))
            }
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            name="message"
            rows={5}
            className={`input rounded-lg bg-secondary flex-1 text-highlight px-4 py-2 placeholder:text-brighterHighlight/50 outline-none mt-4 transition-all ${
              formErrors.messageErr
                ? "ring-2 ring-red-500"
                : "focus:ring-1 ring-amber-800"
            }`}
            placeholder="Message..."
          />

          <ReCAPTCHA
            onChange={onChange}
            sitekey="6LcNwakqAAAAANH0VTsNizawGLOCjBGkUIjgKiRZ"
            className="my-8"
          />

          <button
            type="submit"
            className="pageclip-form__submit w-fit bg-[length:200%_200%] duration-500 space-x-2 cursor-pointer bg-right hover:bg-left z-50 bg-primary bg-gradient-to-r from-secondary via-amber-800 to-secondary rounded-lg text-brighterHighlight px-8 transition-all py-2"
          >
            <p>Send!</p>
          </button>
        </>
      )}
      {status && (
        <p className="text-brighterHighlight text-xl text-center">{status}</p>
      )}

      {showMessage && (
        <p className="text-brighterHighlight text-xl text-center">
          Message sent successfully!
        </p>
      )}
    </form>
  );
};

export default Form;

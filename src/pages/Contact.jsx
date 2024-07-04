import { useState } from "react";
import { contactBg } from "../assets";
import ContactCard from "../components/ContactCard";
import { contactInfo } from "../constants/contact";
import { toast } from "react-toastify";
import { db } from "../configs/firebase";
import { addDoc, collection } from "firebase/firestore";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, name, message } = values;

    if (!email || !name || !message) {
      return toastError();
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "messages"), values);
      // Reset
      setValues({
        name: "",
        email: "",
        message: "",
      });
      toastSuccess();
      setLoading(false);
    } catch (error) {
      console.log(error);
      toastError();
      setLoading(false);
    }
  };

  const toastSuccess = () =>
    toast.success("Message Sent!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const toastError = () => {
    toast.error("Something went wrong!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    return null;
  };
  return (
    <div className="h-screen">
      <h1 className="text-4xl mt-4 md:mt-0 text-white font-semibold text-center mb-[15px]">
        Contact <span className="text-primary">Me</span>
      </h1>
      <p className="text-xl font-[300] text-white text-center">
        <span className="text-primary">Get </span> in touch.
      </p>

      <div className="grid md:mt-20 mt-10 px-5 sm:px-10 md:px-18 lg:px-20 md:grid-cols-2 gap-y-10 gap-x-16">
        <div>
          <h2 className="font-bold text-white my-8 text-2xl text-center ">
            Message Me
          </h2>

          <form className="flex flex-col items-center gap-6">
            <input
              className={StyleSheet.input}
              placeholder="Name"
              name={"name"}
              value={values.name}
              onChange={handleChange}
            />
            <input
              placeholder="Email"
              name={"email"}
              className={StyleSheet.input}
              value={values.email}
              onChange={handleChange}
            />

            <textarea
              placeholder="Message"
              name={"message"}
              className={StyleSheet.input + " h-[150px]"}
              value={values.message}
              onChange={handleChange}
            />

            <input
              type={"submit"}
              value={"Send"}
              onClick={handleSubmit}
              disabled={loading}
              className="py-2 disabled:bg-opacity-75 active:scale-95 cursor-pointer self-center bg-primary text-white font-semibold px-12 text-[20px] rounded-[8px]"
            />
          </form>
        </div>

        <div
          style={{
            background: `url(${contactBg})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "darken",
            backgroundColor: "rgba(0,0,0, 0.6)",
          }}
          className={`rounded-[20px]`}
        >
          <div className="py-4 md:pb-[0px] pb-10">
            <h2 className="font-bold text-white my-8 text-2xl text-center ">
              Contact Info
            </h2>
            <div className="flex flex-col items-start gap-8 px-3">
              {contactInfo.map((contact, index) => (
                <ContactCard
                  title={contact.title}
                  value={contact.value}
                  Icon={contact.Icon}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StyleSheet = {
  input:
    "bg-black/60 transition-all duration-[300] ease-out ring-2 ring-transparent focus:ring-neutral-600 py-4 w-full md:w-[70%] px-4 placeholder:font-semibold text-white placeholder:text-white/60 rounded-[12px]",
};

export default Contact;

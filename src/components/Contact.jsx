import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");

    emailjs
      .send(
        "mudraBites_00726", 
        "mudraBites_00722",
        formData,
        "OgzDh9zcVr-f5BrH3" 
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="bg-grey-gradient1 shadow-md rounded-lg overflow-hidden max-w-7xl mx-auto mt-10">
      <section className="text-gray-100 body-font relative" id="contact">
        <div className="container px-8 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              <strong>Contact Us</strong>
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-white">
              For more inquiry!
            </p>
          </div>
          <div className="lg:w-5/6 xl:w-4/5 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-grey-color2 rounded border border-gray-600 focus:border-border-color1 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-grey-color2 rounded border border-gray-600 focus:border-border-color1 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      required
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-grey-color2 rounded border border-gray-600 focus:border-border-color1 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="p-12 w-full text-center">
                  <button
                    type="submit"
                    className="bg-grey-color2 hover:bg-grey-color2 text-white font-bold py-2 px-4 rounded"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

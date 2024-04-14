"use client";
import NotifyMessage from "@/utils/NotifyMessage";
import { Metadata } from "next";
import Link from "next/link";


const Contact = () => {
  const submitHandler = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      number: formData.get("number"),
      text: formData.get("text"),
    };
    console.log(data);
    NotifyMessage.SUCCESS("Message sent Successfully");
    e.target.reset();
  };
  return (
    <div className="">
      <div className="h-56 w-full  bg-center bg-cover flex justify-center opacity-95 items-center bg-gray-200">
        <div>
          <h1 className="text-gray-800 font-semibold text-2xl mb-2">CONTACT</h1>
          <nav className="text-gray-500 font-medium text-md ">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link href="/" className="text-gray-500">
                  Home
                </Link>
                <span className="mx-2">{">"}</span>
              </li>
              <li className="flex items-center">
                <Link href="/contact" className="text-gray-500">
                  Contact
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto  px-5 lg:px-0  my-8 py-8">
        {/* Get In Touch */}
        <section>
          <h1 className="w-fit mx-auto text-gray-700 font-semibold text-2xl pb-4 border-b border-gray-500 text-center">
            Get in Touch
          </h1>
          <p className="w-full md:w-1/2 mx-auto text-sm text-gray-500  my-6 text-center">
            Need assistance? We're here to help! Whether you have a question,
            feedback, or a request, our team is ready to assist. Get in touch
            with us through email, phone, or social media. We value your input
            and look forward to hearing from you!
          </p>
          <p className="text-center text-sm font-semibold my-3 text-gray-600 mb-12">
            #CustomerService #ContactUs
          </p>
          <div className=" md:flex md:justify-between items-center">
            <div className=" flex space-x-6 md:justify-between items-center md:px-6 py-4 md:gap-5">
              <p className=" rounded-full px-4 py-3 bg-slate-100">
                <i className="ri-map-pin-line font-bold text-xl"></i>
              </p>
              <div className="text-sm  text-gray-500">
                <p className="mb-2">House # 402, Roboto Street,</p>
                <p>New York, USA.</p>
              </div>
            </div>
            <div className=" flex space-x-6 md:justify-between items-center md:px-6 py-4 md:gap-5">
              <p className=" rounded-full px-4 py-3 bg-slate-100">
                <i className="ri-phone-fill font-bold text-xl"></i>
              </p>
              <div className="text-sm  text-gray-500">
                <p className="mb-2"> +110 - 917 - 123 - 4567</p>
                <p> +110 - 917 - 123 - 4567</p>
              </div>
            </div>
            <div className=" flex space-x-6 md:justify-between items-center md:px-6 py-4 md:gap-5">
              <p className=" rounded-full px-4 py-3 bg-slate-100">
                <i className="ri-mail-line font-bold text-xl"></i>
              </p>
              <div className="text-sm  text-gray-500">
                <p className="mb-2">amihasan130@gmail.com</p>
                <p>omihasan1307@gmail@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
        {/* contact */}
        <section className="py-12">
          <h1 className=" text-gray-800 font-semibold text-lg my-4">
            DROP A MESSAGE
          </h1>
          <form
            action=""
            className="space-y-4"
            onSubmit={(e) => submitHandler(e)}
          >
            <div className="md:flex md:justify-between items-center gap-4">
              <div className="w-full">
                <input
                  name="name"
                  required
                  placeholder="Your Name*"
                  className="border placeholder-gray-500 text-sm px-6 py-4 w-full"
                  type="text"
                />
              </div>
              <div className="w-full">
                <input
                  required
                  name="email"
                  placeholder="Email Address*"
                  className="border text-sm placeholder-gray-500 px-6 py-4 w-full"
                  type="email"
                />
              </div>
              <div className="w-full">
                <input
                  name="number"
                  placeholder="Phone Number"
                  className="border text-sm placeholder-gray-500 px-6 py-4 w-full"
                  type="text"
                />
              </div>
            </div>
            <div>
              <textarea
                required
                className="border w-full placeholder-gray-500 px-6 py-6 text-sm"
                name="text"
                id=""
                // cols="30"
                // rows="10"
                placeholder="Ask What You Want To Know..."
              />
            </div>
            <button
              type="submit"
              className="py-4 px-10 border text-md hover:text-white duration-700 transition-all hover:bg-gray-800 font-medium"
            >
              SEND MESSAGE
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;

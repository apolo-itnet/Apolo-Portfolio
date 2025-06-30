import React from "react";

const Contact = () => {
  return (
    <div>
      <div id="contact" className="h-screen w-full mx-auto py-10 res-pad" >
        <h1 className="text-6xl text-center poppins font-bold py-6">Contact</h1>

        <div className="flex flex-col lg:flex-row justify-center items-center max-w-5xl mx-auto py-4 lg:py-10 gap-8">

          <div className="flex-1 flex flex-col gap-4">
            <p className="text-lg barlow">Location : Chittagong, Bangladesh</p>
            <p className="text-lg barlow">Phone: 01816 - 122-333</p>
            <p className="text-lg barlow">Email: apolo.itnet@gmail.com</p>
          </div>

          <div className="flex-1 flex flex-col gap-4 w-full">
            {" "}
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-emerald-500 focus:ring-emerald-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Email address
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your email"
                  className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-emerald-500 focus:ring-emerald-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Your Message 
              </label>
              <div className="relative">
                <textarea
                  type="text"
                  id="name"
                  name="name"
                  rows={4}
                  placeholder="Enter your message"
                  className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-emerald-500 focus:ring-emerald-500 focus:outline-none"
                  required
                />
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;

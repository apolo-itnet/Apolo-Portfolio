import React from "react";
import { Mail, Phone, MapPin, User, MessageSquareText } from "lucide-react";
import { slideLeft, slideRight, slideUp } from "../../Utility/Animation";
import { motion } from "framer-motion";
import useScrollAnimation from "../../Utility/UseScrollAnm";

const Contact = () => {
  const { ref, controls } = useScrollAnimation();

  return (
    <section className="w-full min-h-screen  px-4 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-zinc-700/70 shadow-lg rounded-2xl p-8 md:p-16">
        <h2 className="text-3xl md:text-5xl font-black  text-center  mb-12 uppercase">
          Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Left Info Side */}
          <motion.div className="space-y-6">
            <motion.div
              ref={ref}
              initial="initial"
              animate={controls}
              exit={"exit"}
              variants={slideRight(0.3)}
              className="flex items-center gap-4 "
            >
              <Mail className="text-emerald-700" />
              <p className="text-sm md:text-base">apolo.itnet@gmail.com</p>
            </motion.div>
            <motion.div
              ref={ref}
              initial="initial"
              animate={controls}
              exit={"exit"}
              variants={slideRight(0.35)}
              className="flex items-center gap-4 "
            >
              <Phone className="text-emerald-700" />
              <p className="text-sm md:text-base">+880 1816 139515</p>
            </motion.div>
            <motion.div
              ref={ref}
              initial="initial"
              animate={controls}
              exit={"exit"}
              variants={slideRight(0.4)}
              className="flex items-center gap-4 "
            >
              <MapPin className="text-emerald-700" />
              <p className="text-sm md:text-base">Chittagong, Bangladesh</p>
            </motion.div>
          </motion.div>

          {/* Right Form Side */}
          <motion.form className="space-y-6">
            <motion.div
              ref={ref}
              initial="initial"
              animate={controls}
              exit={"exit"}
              variants={slideUp(0.5)}
              className="flex items-center border-b border-white focus-within:border-emerald-700 py-2"
            >
              <User className=" mr-3 text-emerald-700" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full outline-none bg-transparent  placeholder:/60"
              />
            </motion.div>

            <motion.div
              ref={ref}
              initial="initial"
              animate={controls}
              exit={"exit"}
              variants={slideUp(0.55)}
              className="flex items-center border-b border-white focus-within:border-emerald-700 py-2"
            >
              <Mail className=" mr-3 text-emerald-700" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full outline-none bg-transparent  placeholder:/60"
              />
            </motion.div>

            <motion.div
              ref={ref}
              initial="initial"
              animate={controls}
              exit={"exit"}
              variants={slideUp(0.6)}
              className="flex items-center border-b border-white focus-within:border-emerald-700 py-2"
            >
              <MessageSquareText className=" mr-3 text-emerald-700" />
              <textarea
                placeholder="Your Message"
                rows="3"
                className="w-full outline-none bg-transparent  placeholder:/60 resize-none"
              ></textarea>
            </motion.div>

            <motion.button
              ref={ref}
              initial="initial"
              animate={controls}
              exit={"exit"}
              variants={slideLeft(0.6)}
              type="submit"
              className="bg-emerald-700  px-6 py-3 rounded-full font-semibold hover:bg-emerald-800 transition-colors duration-300 ease-in-out cursor-pointer text-xs barlow uppercase tracking-wider"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);
    setSuccess("");

    try {
      await emailjs.sendForm(
        "service_5bnpfjy",
        "template_qag72z8",
        form.current,
        "FRs5ylanHdf1SbMVS"
      );

      setSuccess("✅ Message sent successfully!");

      form.current.reset();
    } catch (error) {
      console.log(error);

      setSuccess("❌ Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          subtitle="Let's Connect"
          title="Send Message"
        />

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >

            <h2 className="text-3xl font-bold mb-8">
              Contact Information
            </h2>

            <div className="space-y-7">

              <div className="flex gap-5">
                <Mail className="text-violet-400" />

                <div>
                  <h4>Email</h4>

                  <p className="text-gray-400">
                    mishraabhay8777@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Phone className="text-cyan-400" />

                <div>
                  <h4>Phone</h4>

                  <p className="text-gray-400">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <MapPin className="text-pink-400" />

                <div>
                  <h4>Location</h4>

                  <p className="text-gray-400">
                    Lucknow, Uttar Pradesh
                  </p>
                </div>
              </div>

            </div>

            <div className="flex gap-5 mt-10">

              <a
                href="https://github.com/Abhay8777"
                target="_blank"
                className="p-4 rounded-xl bg-white/5 hover:bg-violet-500 transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/abhay-mishra-42aaa2349/"
                target="_blank"
                className="p-4 rounded-xl bg-white/5 hover:bg-cyan-500 transition"
              >
                <FaLinkedin size={22} />
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 space-y-5"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl bg-black/40 border border-white/10 p-4 outline-none"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl bg-black/40 border border-white/10 p-4 outline-none"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full rounded-xl bg-black/40 border border-white/10 p-4 outline-none"
            />

            <textarea
              rows={6}
              name="message"
              placeholder="Your Message"
              required
              className="w-full rounded-xl bg-black/40 border border-white/10 p-4 outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl py-4 font-bold bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 hover:scale-[1.02] transition"
            >
              {loading ? (
                "Sending..."
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Send size={18} />
                  Send Message
                </span>
              )}
            </button>

            {success && (
              <p className="text-center mt-3">
                {success}
              </p>
            )}

          </motion.form>

        </div>

      </div>
    </section>
  );
}
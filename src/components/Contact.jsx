import { useEffect, useRef, useState } from "react";
import mailIcon from "../assets/mail-icon.png";
import github from "../assets/github2.png";
import linkedin from "../assets/linkedin3.png";

function AnimatedDiv({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    message: "",
    type: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    // Clear previous status
    setStatus({
      message: "",
      type: "",
    });

    try {
      const response = await fetch("http://localhost:8080/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus({
        message: "Message sent successfully!",
        type: "success",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setStatus({
          message: "",
          type: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Error:", error);

      setStatus({
        message: "Failed to send message. Please try again.",
        type: "error",
      });

      setTimeout(() => {
        setStatus({
          message: "",
          type: "",
        });
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full px-3 pb-10 overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-[5px] pointer-events-none" />

      <div className="relative z-10 max-w-287 mx-auto">
        {/* Heading */}
        <AnimatedDiv>
          <div className="flex flex-col items-start">
            <p className="text-white font-['Anton'] text-[45px] md:text-6xl leading-tight">
              Let's&nbsp;
              <span className="text-blue-500">Connect</span>
            </p>

            <p className="text-gray-300 pt-5 md:pt-8 text-base md:text-[19px] max-w-3xl">
              Have a project in mind, want to collaborate, or just want to talk
              about technology? Feel free to reach out
            </p>
          </div>
        </AnimatedDiv>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {/* Contact Information */}
          <AnimatedDiv>
            <div className="border border-[#404145] bg-[#202021]/40 backdrop-blur-xl rounded-2xl p-7 h-full">
              <p className="text-white font-['Anton'] text-3xl">Get in touch</p>

              <p className="text-gray-400 mt-4 text-sm md:text-base">
                I'm always open to discussing new projects, ideas,
                opportunities, or collaborations
              </p>

              <div className="flex flex-col gap-5 mt-7">
                {/* Email */}
                <a
                  href="mailto:oreva.vinayak@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <img src={mailIcon} alt="mail icon" className="h-5" />
                  </div>

                  <div>
                    <p className="text-gray-400 text-xs">Email</p>

                    <p className="text-white text-sm md:text-base group-hover:text-blue-500 transition-colors">
                      oreva.vinayak@gmail.com
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/VinayakS404"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <img src={github} alt="GitHub icon" className="h-5" />
                  </div>

                  <div>
                    <p className="text-gray-400 text-xs">GitHub</p>

                    <p className="text-white text-sm md:text-base group-hover:text-blue-500 transition-colors">
                      VinayakS404
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/vinayak-s-390319369/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <img src={linkedin} alt="LinkedIn icon" className="h-5" />
                  </div>

                  <div>
                    <p className="text-gray-400 text-xs">LinkedIn</p>

                    <p className="text-white text-sm md:text-base group-hover:text-blue-500 transition-colors">
                      Vinayak S
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </AnimatedDiv>

          {/* Message Form */}
          <AnimatedDiv>
            <div className="border border-[#404145] bg-[#202021]/40 backdrop-blur-xl rounded-2xl p-7">
              <p className="text-white font-['Anton'] text-3xl">
                Send a message
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 mt-7"
              >
                {/* Name */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full bg-black/20 border border-[#404145] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-blue-500 transition-colors"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="w-full bg-black/20 border border-[#404145] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-blue-500 transition-colors"
                />

                {/* Message */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your message"
                  required
                  className="w-full bg-black/20 border border-[#404145] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-blue-500 transition-colors resize-none"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 text-white font-bold rounded-xl py-3 transition-all duration-300 hover:-translate-y-1"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {/* Floating Status Message */}
                <div className="relative h-0">
                  <div
                    className={`absolute left-0 right-0 top-3 flex justify-center transition-all duration-300 ${
                      status.message
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    {status.message && (
                      <div
                        className={`px-4 py-2 rounded-lg border backdrop-blur-md text-sm ${
                          status.type === "success"
                            ? "text-green-400 bg-green-500/10 border-green-500/20"
                            : "text-red-400 bg-red-500/10 border-red-500/20"
                        }`}
                      >
                        {status.message}
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </AnimatedDiv>
        </div>

        {/* Footer */}
        <AnimatedDiv className="mt-12">
          <div className="border-t border-[#404145] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Vinayak S. All rights reserved.
            </p>

            <p className="text-gray-500 text-sm">
              Built with <span className="text-blue-500">React</span> &{" "}
              <span className="text-blue-500">Spring Boot</span>
            </p>
          </div>
        </AnimatedDiv>
      </div>
    </div>
  );
}

export default Contact;

import { useEffect, useRef, useState } from "react";
import mailIcon from "../assets/mail-icon.png"
import github from "../assets/github2.png"
import linkedin from "../assets/linkedin3.png"

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
      }
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
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}

function Contact() {
  return (
    <div className="relative w-full px-10 pb-10 overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-[5px] pointer-events-none" />

      <div className="relative z-10 max-w-287 mx-auto">

        <AnimatedDiv>
          <div className="flex flex-col items-start">
            <p className="text-white font-['Anton'] text-[45px] md:text-6xl leading-tight">
              Let's&nbsp;
              <span className="text-blue-500">Connect</span>
            </p>

            <p className="text-gray-300 pt-5 md:pt-8 text-base md:text-[19px] max-w-3xl">
              Have a project in mind, want to collaborate, or just want to
              talk about technology? Feel free to reach out.
            </p>
          </div>
        </AnimatedDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">

          <AnimatedDiv>
            <div className="border border-[#404145] bg-[#202021]/40 backdrop-blur-xl rounded-2xl p-7 h-full">
              <p className="text-white font-['Anton'] text-3xl">
                Get in touch
              </p>

              <p className="text-gray-400 mt-4 text-sm md:text-base">
                I'm always open to discussing new projects, ideas,
                opportunities, or collaborations.
              </p>

              <div className="flex flex-col gap-5 mt-7 ">

                <a
                  href="mailto:oreva.vinayak@gmail.com"
                  className="group flex items-center gap-4 "
                >
                  <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 ">
                    <img src= {mailIcon} alt="mail icon" className="h-5" />
                  </div>

                  <div>
                    <p className="text-gray-400 text-xs">
                      Email
                    </p>

                    <p className="text-white text-sm md:text-base group-hover:text-blue-500 transition-color">
                      oreva.vinayak@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/VinayakS404"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <img src= {github} alt="mail icon" className="h-5" />
                  </div>

                  <div>
                    <p className="text-gray-400 text-xs">
                      GitHub
                    </p>

                    <p className="text-white text-sm md:text-base group-hover:text-blue-500 transition-colors">
                      VinayakS404
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/vinayak-s-390319369/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <span className="text-blue-500 text-sm font-bold">
                      <img src= {linkedin} alt="mail icon" className="h-5" />
                    </span>
                  </div>

                  <div>
                    <p className="text-gray-400 text-xs">
                      LinkedIn
                    </p>

                    <p className="text-white text-sm md:text-base group-hover:text-blue-500 transition-colors">
                      Vinayak S
                    </p>
                  </div>
                </a>

              </div>
            </div>
          </AnimatedDiv>

          <AnimatedDiv>
            <div className="border border-[#404145] bg-[#202021]/40 backdrop-blur-xl rounded-2xl p-7">
              <p className="text-white font-['Anton'] text-3xl">
                Send a message
              </p>

              <form className="flex flex-col gap-5 mt-7">

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-black/20 border border-[#404145] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-blue-500 transition-colors"
                />

                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-black/20 border border-[#404145] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-blue-500 transition-colors"
                />

                <textarea
                  rows="5"
                  placeholder="Your message"
                  className="w-full bg-black/20 border border-[#404145] rounded-xl px-4 py-3 text-white placeholder:text-gray-500 outline-none focus:border-blue-500 transition-colors resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl py-3 transition-all duration-300 hover:-translate-y-1"
                >
                  Send Message
                </button>

              </form>
            </div>
          </AnimatedDiv>

        </div>

        <AnimatedDiv className="mt-12">
          <div className="border-t border-[#404145] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Vinayak S. All rights reserved.
            </p>

            <p className="text-gray-500 text-sm">
              Built with{" "}
              <span className="text-blue-500">
                React
              </span>{" "}
              & <span className="text-blue-500">
                Spring Boot
              </span>{" "}
            </p>
          </div>
        </AnimatedDiv>

      </div>
    </div>
  );
}

export default Contact;
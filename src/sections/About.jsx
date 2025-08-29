import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("tripathishrads2004@gmail.com");

    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid11.png"
              alt="grid-11"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Shraddha</p>
              <p className="grid-subtext">
                Fresher web developer with a strong base in MERN stack and Java.
                Eager to learn, build, and grow through exciting projects.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                From Java and DSA to full-stack MERN development, I love turning
                ideas into functional apps. Currently, I’m diving into Next.js
                and Three.js to explore new possibilities in modern web
                development.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 20.59,
                    lng: 78.96,
                    text: "I'm here!",
                    color: "white",
                    size: 20,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I can work remotely across most timezomes.
              </p>
              <p className="grid-subtext">
                I'm based in India, with remote work available.
              </p>
              <Button
                name="Contact Me"
                isBeam
                containerClass="w-full mt-10"
                onClick={() => {
                  const targetElement = document.getElementById("about-contact");
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding & Poetry</p>
              <p className="grid-subtext">
                I channel my love for problem-solving through coding and my
                creativity through poetry, balancing logic with imagination
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2" id="about-contact">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-xl md:text-l font-medium text-gray_gradient text-white">tripathishrads2004@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

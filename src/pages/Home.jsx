import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { contactIcons, socialIcons } from "../constants/contact";
import "../static/style.css";

function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    })
      .then(() => setInit(true))
      .catch((err) => console.log(err));
  }, []);

  const particlesLoaded = (container) => console.log(container);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#1f1f1f",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          // onHover: {
          //   enable: true,
          //   mode: "repulse",
          // },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const framerSetting = {
    initial: { scale: 0.2, opacity: 0 },
    animate: { scale: 1, opacity: 100, transition: { duration: 1 } },
  };

  return (
    <>
      <div className="wrapper z-0 flex items-center justify-center">
        <div style={{ zIndex: "0", position: "relative" }}>
          {init && (
            <Particles
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              options={options}
            />
          )}
        </div>

        <motion.div
          {...framerSetting}
          className="z-30 absolute top-[40%] -translate-x-[50%] translate-y-[50%]"
        >
          <h1 className="text-primary  font-extrabold md:text-7xl text-4xl w-full whitespace-nowrap md:w-auto text-extrabold text-center">
            Kirubel <span className="text-white">Mamo</span> <br />
            <ReactTyped
              strings={[
                '<span style="color: white;">I am a</span> frontend developer',
                '<span style="color: white;">I am a</span> UI/UX designer',
              ]}
              typeSpeed={90}
              backSpeed={60}
              loop
              style={{ fontWeight: "200" }}
              className="md:text-[32px] text-[20px]"
            />
          </h1>
          <br />
        </motion.div>
      </div>

      <motion.div
        {...framerSetting}
        className="absolute md:pl-10 left-0 md:top-[40%] bottom-5 w-full md:w-auto flex justify-center md:bottom-auto"
      >
        <div className="flex md:flex-col gap-[20px] items-start">
          {socialIcons.map((item) => (
            <a
              href={item.name == "Email" ? "mailto: " + item.path : item.path}
              target={"_blank"}
              className="cursor-pointer"
              key={item.name}
            >
              <item.Icon size={25} color="#ECECEC" />
            </a>
          ))}
        </div>
      </motion.div>

      <motion.div
        {...framerSetting}
        className="absolute pr-10 md:flex hidden right-0 top-[43%]"
      >
        <div className="flex flex-col gap-[20px] items-start">
          {contactIcons.map((item) => (
            <a
              href={item.name == "telephone" ? "tel:" + item.path : item.path}
              target={"_blank"}
              className="cursor-pointer"
              key={item.name}
            >
              <item.Icon size={25} color="ECECEC" />
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default Home;

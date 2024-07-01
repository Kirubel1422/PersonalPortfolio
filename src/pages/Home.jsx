import { FaFacebook, FaGithub, FaInstagram, FaPhone } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiTelegram } from "react-icons/si";
import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ReactTyped } from "react-typed";

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
          onHover: {
            enable: true,
            mode: "repulse",
          },
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

  const socialIcons = [
    {
      path: "#",
      name: "Instagram",
      Icon: FaInstagram,
    },
    {
      path: "#",
      name: "Facebook",
      Icon: FaFacebook,
    },
    {
      path: "#",
      name: "Linkedin",
      Icon: IoLogoLinkedin,
    },
    {
      path: "#",
      name: "Github",
      Icon: FaGithub,
    },
  ];

  const contactIcons = [
    {
      Icon: SiTelegram,
      name: "telegram",
      value: "https://t.me/ripsima29",
    },
    {
      Icon: FaPhone,
      name: "telephone",
      value: "+971569527221",
    },
  ];

  return (
    <>
      <div className="wrapper z-0">
        <div style={{ zIndex: "0", position: "relative" }}>
          {init && (
            <Particles
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              options={options}
            />
          )}
        </div>

        <div className="z-50 absolute top-[40%] left-1/2 -translate-x-[50%] translate-y-[50%]">
          <h1 className="text-[#FC5858] font-extrabold sm:text-7xl text-4xl w-full whitespace-nowrap sm:w-auto text-extrabold text-center">
            Kirubel <span className="text-white">Mamo</span> <br />
            <ReactTyped
              strings={[
                '<span style="color: white;">I am a</span> frontend developer',
                '<span style="color: white;">I am a</span> UI/UX designer',
              ]}
              typeSpeed={50}
              backSpeed={60}
              loop
              style={{ fontWeight: "300" }}
              className="sm:text-[32px] text-[20px]"
            />
          </h1>
          <br />
        </div>
      </div>

      <div className="absolute sm:pl-10 left-0 sm:top-[40%] bottom-5 w-full md:w-auto flex justify-center md:bottom-auto">
        <div className="flex sm:flex-col gap-[20px] items-start">
          {socialIcons.map((item) => (
            <span className="cursor-pointer" key={item.name}>
              <item.Icon size={25} color="#ECECEC" />
            </span>
          ))}
        </div>
      </div>

      <div className="absolute pr-10 sm:flex hidden right-0 top-[43%]">
        <div className="flex flex-col gap-[20px] items-start">
          {contactIcons.map((item) => (
            <span className="cursor-pointer" key={item.name}>
              <item.Icon size={25} color="ECECEC" />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;

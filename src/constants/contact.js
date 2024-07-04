import { RiFileUserLine } from "react-icons/ri";
import { CiMap } from "react-icons/ci";
import { MdOutlineCall } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { FaFacebook, FaGithub, FaInstagram, FaPhone } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiTelegram } from "react-icons/si";

export const contactInfo = [
  {
    Icon: RiFileUserLine,
    title: "Name",
    value: "Kirubel",
  },
  {
    Icon: CiMap,
    title: "Location",
    value: "Dubai, UAE",
  },
  {
    Icon: MdOutlineCall,
    title: "Phone",
    value: "+971569527221",
  },
  {
    Icon: MdAlternateEmail,
    title: "Email",
    value: "kirubeltekle9@gmail.com",
  },
];

export const socialIcons = [
  {
    path: "https://www.instagram.com/kirubel1421?igsh=MWZsZ3V3aDhhNDVsbg==",
    name: "Instagram",
    Icon: FaInstagram,
  },
  {
    path: "https://www.linkedin.com/in/tamiru-diriba-715048160?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    name: "Linkedin",
    Icon: IoLogoLinkedin,
  },
  {
    path: "https://github.com/Kirubel1422",
    name: "Github",
    Icon: FaGithub,
  },
  {
    path: "kirubeltekle9@gmail.com",
    name: "Email",
    Icon: MdAlternateEmail,
  },
];

export const contactIcons = [
  {
    Icon: SiTelegram,
    name: "telegram",
    path: "https://t.me/ripsima29",
  },
  {
    Icon: FaPhone,
    name: "telephone",
    path: "+971569527221",
  },
];

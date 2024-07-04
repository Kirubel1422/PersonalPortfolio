import PropTypes from "prop-types";
import { myImg } from "../assets";
import { details, skillSet } from "../constants/about";

function About() {
  return (
    <div className="px-3 md:px-0">
      <h1 className="text-4xl mt-4 md:mt-0 text-white font-semibold text-center mb-[15px]">
        About <span className="text-primary">Me</span>
      </h1>
      <p className="text-xl font-[300] text-white text-center">
        Get to Know <span className="text-primary">me.</span>
      </p>

      <div className="flex justify-center !items-start sm:gap-24 gap-8 flex-wrap-reverse mt-[60px]">
        <div className="lg:w-[768px]">
          <h2 className="sm:text-4xl text-[28px] sm:leading-[56px] font-semibold text-white">
            I&apos;m creative{" "}
            <span className="text-primary">frontend developer</span> based in
            Dubai, UAE.
          </h2>
          <p className="sm:text-[28px] text-[15px] text-white mt-[35px] sm:leading-[40px]">
            With over a year of experience as a professional frontend developer,
            I have acquired the skills and knowledge necessary to make your
            project a success. I enjoy every step while working.
          </p>

          <div className="flex items-center justify-center mt-[35px]">
            <button className=" sm:py-5 py-2 px-6 sm:px-12 sm:text-2xl text-lg sm:font-semibold border border-primary text-primary hover:text-white hover:bg-primary transition-all duration-300 ">
              Open CV
            </button>
          </div>
        </div>

        <div className="xl:h-[400px]">
          <img
            className="md:w-[450px] bg-blend- rounded-[16px] sm:rounded-[80px]"
            src={myImg}
            loading="lazy"
          />
        </div>
      </div>

      <div className="sm:mt-[100px] mt-[60px] ">
        <h3 className="text-4xl text-white font-semibold text-center mb-[15px]">
          <span className="text-primary">My</span> Services
        </h3>

        <div className="flex flex-wrap justify-center gap-10 items-center mt-[35px]">
          {details.map((item, index) => (
            <Card
              title={item.title}
              Icon={item.Icon}
              para={item.para}
              key={index}
            />
          ))}
        </div>
      </div>

      <div className="sm:mt-[100px] mt-[60px]">
        <h3 className="text-4xl text-white font-semibold text-center mb-[15px]">
          My <span className="text-primary">Skills</span>
        </h3>

        <div className="wrapper grid gap-y-8 md:gap-y-0 md:grid-cols-2 md:gap-x-10 mt-[35px] sm:px-2 md:px-24">
          {skillSet.map((item) => (
            <Skill name={item.name} value={item.value} key={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Card = ({ title, Icon, para }) => {
  return (
    <div className="flex flex-col p-10 items-center bg-[#2a2929] rounded-[10px] sm:rounded-[16px]">
      <span
        style={{ backgroundColor: "#ff0049" }}
        className="rounded-[25px] p-3"
      >
        <Icon size={80} color="white" />
      </span>

      <h4 className="sm:text-2xl text-xl  mt-[15px] text-white font-semibold text-center">
        {title}
      </h4>
      <p className="mt-[10px] text-white text-center w-[300px] sm:w-[330px]">
        {para}
      </p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  Icon: PropTypes.func,
  para: PropTypes.string,
};

const Skill = ({ name, value }) => {
  return (
    <div className="sm:mb-8 mb-3">
      <span className="block text-lg tracking-wide font-semibold text-white mb-1">
        {name}
      </span>
      <div className="h-[35px] px-1 sm:px-2 rounded-[16px] bg-[#2a2929] flex items-center sm:mb-3">
        <div
          style={{ width: `${value}%` }}
          className="bg-[#ff0049] h-full rounded-[16px] flex items-center justify-center text-white text-lg font-semibold"
        >
          {value} %
        </div>
      </div>
    </div>
  );
};

Skill.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
};
export default About;

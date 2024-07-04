import PropTypes from "prop-types";

const ProjectCards = ({ img, title, desc, projectLink, ...props }) => {
  return (
    <div className="mt-24">
      <div className="lg:relative">
        <img
          className="lg:h-[400px] md:h-[350px] w-full sm:w-auto h-[300px] object-cover object-center"
          src={img}
          alt={"Project Image"}
        />

        <div className="lg:p-8 md:p-6 px-4 py-6 shadow-xl lg:w-[40vw] justify-center lg:absolute lg:-right-10 xl:right-40 lg:bottom-[5%] xl:bottom-[10%] rounded-[16px] bg-black">
          <h3 className="md:text-[38px] text-[32px] font-semibold text-primary">
            {title}
          </h3>
          <p className="md:text-[16px] text-[21px] text-opacity-80 text-white mt-[25px]">
            {desc}
          </p>

          <div className="flex items-center justify-center mt-[20px]">
            <a
              href={projectLink}
              target="_blank"
              className=" border border-primary hover:bg-primary hover:text-white transition-all duration-300 ease-out text-[16px] text-opacity-80 text-primary py-[10px] px-[20px] font-semibold "
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCards.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  projectLink: PropTypes.string,
};

export default ProjectCards;

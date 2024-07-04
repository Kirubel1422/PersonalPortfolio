import ProjectCards from "../components/ProjectCards";
import { myPortfolioData } from "../constants/portfolio";

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-4xl mt-4 md:mt-0 text-white font-semibold text-center mb-[15px]">
        <span className="text-primary">My</span> Portfolio
      </h1>
      <p className="text-xl font-[300] text-white text-center">
        Some Of <span className="text-primary">My Works</span>
      </p>

      <div className="portfolio-wrapper mt-20 px-5 sm:px-10 md:px-18 lg:px-20">
        {myPortfolioData.map((item, index) => (
          <ProjectCards
            key={index}
            projectLink={item.projectLink}
            desc={item.desc}
            title={item.title}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

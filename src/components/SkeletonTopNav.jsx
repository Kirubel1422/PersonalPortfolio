import Skeleton from "react-loading-skeleton";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

const SkeletonTopNav = ({ style }) => {
  return (
    <div className={twMerge(style)}>
      <Skeleton
        highlightColor="#727272"
        borderRadius={4}
        height={60}
        width={35}
      />
      <Skeleton
        highlightColor="#727272"
        borderRadius={4}
        height={35}
        width={40}
      />
    </div>
  );
};

SkeletonTopNav.propTypes = {
  style: PropTypes.string,
};

export default SkeletonTopNav;

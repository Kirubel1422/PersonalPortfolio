import PropTypes from "prop-types";

const ContactCard = ({ title, value, Icon, ...props }) => {
  return (
    <div className="flex items-center gap-2">
      <Icon size={32} color="#E2E2E2" />

      <div>
        <h3 className="font-bold text-[16px] text-[#E2E2E2]">{title}</h3>
        <p className="text-[#E2E2E2] font-semibold text-[14px]">{value}</p>
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  Icon: PropTypes.string,
};

export default ContactCard;

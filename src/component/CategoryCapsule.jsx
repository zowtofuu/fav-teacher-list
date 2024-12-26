import PropTypes from "prop-types";

export const CategoryCapsule = ({ category }) => {
  return <div className="category-capsule">{category}</div>;
};

CategoryCapsule.propTypes = {
  category: PropTypes.string.isRequired,
};

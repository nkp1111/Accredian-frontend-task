import PropTypes from "prop-types";

export default function GeneralPadding({ children }) {
  return (
    <div className="md:px-32 px-8">
      {children}
    </div>
  )
}

GeneralPadding.propTypes = { children: PropTypes.any.isRequired }
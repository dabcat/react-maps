import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({
  type,
  children,
  onClick,
  disabled,
  classes,
  href,
  isRouterLink,
  routerLink,
  props
}) => {
  const baseClass = "btn";
  const className = [baseClass, ...classes].join(" ");

  if (href) {
    return (
      <a href={href} className={className} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  const renderBtnOrLink = () => {
    if (!isRouterLink) {
      return (
        <button
          className={className}
          type={type}
          disabled={disabled}
          onClick={onClick}
          {...props}
        >
          {children}
        </button>
      );
    } else {
      return (
        <Link className={className} to={routerLink}>
          {children}
        </Link>
      );
    }
  };

  return renderBtnOrLink();
};

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  classes: PropTypes.arrayOf(PropTypes.string),
  props: PropTypes.object,
  href: PropTypes.string,
  isRouterLink: PropTypes.bool,
  routerLink: PropTypes.shape({
    pathname: PropTypes.string,
    state: PropTypes.object
  })
};

Button.defaultProps = {
  children: undefined,
  disabled: false,
  onClick: undefined,
  type: "button",
  classes: [],
  props: {},
  href: undefined,
  isRouterLink: false,
  routerLink: {}
};

export default Button;

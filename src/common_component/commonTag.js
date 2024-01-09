// Button.js

import React from "react";

const CommonTag = ({ variant, containerTag, ...props }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "secondary":
        return "bg-gray-300 text-gray-700";
      case "accent":
        return "bg-blue-500 text-white";
      default:
        return "bg-green-500 text-white";
    }
  };

  const Container = containerTag || "button";

  return (
    <Container
      className={`${getVariantClasses()} ${props.className}`}
      {...props}
    >
      {props.children}
    </Container>
  );
};

export default CommonTag;

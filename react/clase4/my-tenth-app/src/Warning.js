import React from "react";

// Componente que muestra una advertencia solo si warn es true

const Warning = (props) => {
  if (!props.warn) {
    return null;
  }
  return <div className="warning">Warning!</div>;
};
export default Warning;
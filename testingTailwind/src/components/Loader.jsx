import React from "react";

function Loader(props) {
  return (
    <div className={`${props.h} ${props.w} border-4 border-t-4 border-t-blue-500 border-gray-200 rounded-full animate-spin`}></div>
  );
}

export default Loader;

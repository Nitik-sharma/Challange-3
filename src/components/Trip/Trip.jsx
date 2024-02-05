import React from "react";

function Trip({ text }) {
  return (
    <div>
      <div className=" p-4 text-sm md:text-xl bg-black   text-gray-300">
        <h3>{text}</h3>
      </div>
    </div>
  );
}

export default Trip;

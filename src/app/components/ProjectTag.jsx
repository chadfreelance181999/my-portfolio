import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "dark:text-white dark:border-primary-500 border-secondary-400"
    : "dark:text-[#ADB7BE] text-black dark:border-slate-600 border-secondary-200 hover:dark:border-white hover:border-black";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;

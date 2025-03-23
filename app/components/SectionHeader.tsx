import React from "react";

const SectionHeader = ({ title, subTitle }: { title: string, subTitle: string }) => {
  return (
    <>
      <span className="block font-cursive text-3xl text-gray-400 mb-2">
        {subTitle}
      </span>
      <h2 className="text-2xl uppercase tracking-wider text-heading-color">
        {title}
      </h2>
    </>
  );
};

export default SectionHeader;

"use client";

import React from "react";
import SectionHeader from "./SectionHeader";

const PageHeader = ({ headerImage, headerSubTitle, headerTitle }: { headerImage: string, headerSubTitle: string, headerTitle: string }) => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-fixed custom-header-bg"
      style={{ "--custom-header-bg": `url(${headerImage})` } as React.CSSProperties}
    >
      <div className="px-7.5 pt-24 pb-12">
        <div className="mb-4">
          <SectionHeader title={headerTitle} subTitle={headerSubTitle} />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

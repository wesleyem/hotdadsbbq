"use client";

import Image from "next/image";
import FsLightbox from "fslightbox-react";
import { useState } from "react";

export default function PortfolioBox({
  imageLink,
  imageDesc,
  thumb,
  name,
  category,
}) {
  const [toggler, setToggler] = useState(false);
  return (
    <div className="col-lg-4 col-sm-6 p-2">
      <a
        onClick={() => setToggler(!toggler)}
        className="portfolio-box"
        title={name}
      >
        <FsLightbox toggler={toggler} sources={[imageLink]} />
        <Image className="img-fluid" src={thumb} alt={imageDesc} />
        <div className="portfolio-box-caption p-3">
          <div className="project-category text-white-50">{category}</div>
          <div className="project-name">{name}</div>
        </div>
      </a>
    </div>
  );
}

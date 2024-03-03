import React from "react";
import "../../styles/sectionTitle.scss";

const SectionTitle = ({number, title, titleUp}) => {
  return (
    <div className="section-title">
        <span className="number">{number}</span>
        <h4 className="title-up">{titleUp}</h4>
        <h2 className="title">{title}</h2>
    </div>
  )
}

export default SectionTitle;
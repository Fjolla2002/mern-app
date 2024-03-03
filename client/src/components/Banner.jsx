import React from "react";
import '../styles/banner.scss';
import SectionTitle from "./Shared/SectionTitle";

const Banner = () => {
  return (
    <div className="banner">
        <div className="container">
            <div className="banner-content">
                <SectionTitle 
                    titleUp="A hiking guide"
                    title="Be prepared for the mountains and beyond!"
                    // number="01"
                />
            </div>
        </div>
    </div>
  )
}

export default Banner
import React from "react";
import ImgContentRight from "./ImgContRightHeroSection.module.css";
import { Button } from "../../../components/button/Button";
import { FaArrowRight } from "react-icons/fa6";
export default function ImgContRightHeroSection({
  leftImg,
  rheading,
  rsubtitle,
  className,
  imgclss,
  redirect
}) {
  return (
    <div>
      <section className={ImgContentRight.imgRLcontentContainer}>
        <div className={ImgContentRight.imgRLcontenMainContainer}>
          {/* Text Content */}

          <div className={ImgContentRight.imgRLImgContainer}>
            <div className={ImgContentRight.ImgWrapperConainer}>
              <img
                src={leftImg}
                alt="Cloud Services"
                className={`${ImgContentRight.Imgleft} ${imgclss|| ''}`}
              />
            </div>
          </div>

          <div className={ImgContentRight.imgLContContainer}>
            <h1 className={ImgContentRight.imgCheader}>{rheading}</h1>
            <p className={ImgContentRight.imgCsubtitle}>{rsubtitle}</p>
            <Button name="Learn More" icon={<FaArrowRight />} redirect={redirect} buttonClass='home-button' />
          </div>
          {/* Image Content */}
        </div>
      </section>
    </div>
  );
}

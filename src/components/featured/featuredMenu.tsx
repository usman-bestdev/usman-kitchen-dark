import Image from "next/image";

import {
  descriptionClasses,
  headingClasses,
  menuContainerClasses,
  subHeadingClasses,
} from "./styles/featured";
import { IFeaturedMenuProps } from "./types";

const FeaturedMenu: React.FC<IFeaturedMenuProps> = ({
  heading,
  subHeading,
  description,
  buttonLabel,
  imageSource,
}) => {
  return (
    <>
      <div className={menuContainerClasses}>
        <p className={subHeadingClasses}>{heading}</p>
        <p className={headingClasses}>{subHeading}</p>
        <p className={descriptionClasses}>{description}</p>
        <p className={subHeadingClasses}>{buttonLabel}</p>
      </div>
      <div
        className="position-relative"
        style={{ height: "380px", width: "100%" }}>
        <Image src={imageSource} fill alt="Featured Image" sizes="" />
      </div>
    </>
  );
};

export default FeaturedMenu;

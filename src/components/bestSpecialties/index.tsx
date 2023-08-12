import $ from "jquery";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Button } from "react-bootstrap";

interface CustomWindow extends Window {
  $: any;
  jQuery: any;
}

declare const window: CustomWindow;

if (typeof window !== "undefined") {
  window.$ = window.jQuery = $;
}

import { menuData, responsive } from "./constant";
import SpecialtiesCard from "./specialtiesCard";
import {
  buttonClasses,
  firstHeading,
  mainContainerClasses,
  secondHeading,
  separatorImageClasses,
} from "./styles/bestSpecialties";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const BestSpecialties: React.FC = () => {
  return (
    <div className={mainContainerClasses}>
      <p className={firstHeading}>special offer</p>

      <div className={separatorImageClasses}>
        <Image src={"/separator.png"} fill alt="OurStrength Image" sizes="" />
      </div>

      <p className={secondHeading}>Best Specialties</p>

      <OwlCarousel responsive={responsive} className="owl-theme">
        {menuData.map((item) => (
          <div className="item" key={item.id}>
            <SpecialtiesCard {...item} />
          </div>
        ))}
      </OwlCarousel>

      <Button className={buttonClasses} variant="outline">
        VIEW ALL MENU
      </Button>
    </div>
  );
};

export default BestSpecialties;

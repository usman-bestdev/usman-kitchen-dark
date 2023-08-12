import React from "react";
import $ from "jquery";
interface CustomWindow extends Window {
  $: any;
  jQuery: any;
}

declare const window: CustomWindow;

if (typeof window !== "undefined") {
  window.$ = window.jQuery = $;
}

import dynamic from "next/dynamic";
import { Button } from "react-bootstrap";
import {
  buttonClasses,
  contentContainerClasses,
  contentHeadingClasses,
  descriptionClasses,
  headingClasses,
  separatorImageClasses,
} from "./styles/headerCarousel";
import { headerCarouselOptions, headerData } from "./constant";
import Image from "next/image";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function HeaderCarousel() {
  return (
    <OwlCarousel {...headerCarouselOptions} items={1}>
      {headerData.map((item) => (
        <div className="item" key={item.imageSource}>
          <div
            className="imageLayerTest"
            style={{
              backgroundImage: item.imageSource,
            }}
          />
          <div className={contentContainerClasses}>
            <p className={contentHeadingClasses}>delightful experience</p>
            <div className={separatorImageClasses}>
              <Image
                src={"/separator.png"}
                fill
                alt="OurStrength Image"
                sizes=""
              />
            </div>
            <p className={headingClasses}>{item.heading}</p>
            <p className={descriptionClasses}>{item.description}</p>

            <Button className={buttonClasses} variant="outline">
              VIEW OUR MENU
            </Button>
          </div>
        </div>
      ))}
    </OwlCarousel>
  );
}

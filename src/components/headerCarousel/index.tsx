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
import { buttonClasses } from "./styles/headerCarousel";
import { headerData } from "./constant";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function HeaderCarousel() {
  return (
    <OwlCarousel loop margin={10} nav items={1} dotsContainer={false}>
      {headerData.map((item) => (
        <div className="item" key={item.imageSource}>
          <div
            className="imageLayerTest"
            style={{
              backgroundImage: item.imageSource,
            }}
          />
          <div
            style={{ height: "100vh" }}
            className="d-flex position-absolute flex-column align-items-center justify-content-center">
            <p>delightful experience</p>
            <p>Flavors Inspired by the Seasons</p>
            <p>Come with family & feel the joy of mouthwatering food</p>

            <Button className={buttonClasses} variant="outline">
              VIEW ALL MENU
            </Button>
          </div>
        </div>
      ))}
    </OwlCarousel>
  );
}

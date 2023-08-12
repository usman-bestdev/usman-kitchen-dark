export const menuData = [
  {
    id: 1,
    name: "Greek Salad",
    description:
      "Avocados with crab meat, red onion, crab salad red bell pepper...",
    price: 39.0,
    imageSource: "/menu-11.jpg",
  },
  {
    id: 2,
    name: "Tokusen Wagyu",
    description:
      "Tomatoes, green bell pepper, sliced cucumber onion, olives...",
    price: 45.0,
    imageSource: "/menu-12.jpg",
  },
  {
    id: 5,
    name: "Crab meat",
    description:
      "Avocados with crab meat, red onion, crab salad red bell pepper...",
    price: 39.0,
    imageSource: "/offer-2.jpg",
  },
  {
    id: 6,
    name: "Drinks",
    description:
      "Avocados with crab meat, red onion, crab salad red bell pepper...",
    price: 10.0,
    imageSource: "/offer-3.jpg",
  },
  {
    id: 3,
    name: "Butternut Pumpkin",
    description:
      "Avocados with crab meat, red onion, crab salad stuffed bell pepper...",
    price: 15.0,
    imageSource: "/menu-13.jpg",
  },
  {
    id: 4,
    name: "Opu Fish",
    description:
      "Vegetables, cheeses, ground meats, tomato sauce, seasonings...",
    price: 12.0,
    imageSource: "/menu-14.jpg",
  },
];

export const specialtiesCarouselOptions = {
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  rewind: true,
};

export const responsive = {
  0: {
    items: 1,
    ...specialtiesCarouselOptions,
  },
  600: {
    items: 3,
    ...specialtiesCarouselOptions,
  },
  1000: {
    items: 4,
    ...specialtiesCarouselOptions,
  },
};

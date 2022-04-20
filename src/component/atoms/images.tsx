import React from "react";

interface ImagesProps {
  image: any;
  type: "mini" | "medium" | "large";
}
export let Images = ({ image, type }: ImagesProps) => {
  let css;
  switch (type) {
    case "large":
      css = "w-[100%] h-[auto] md:h-[600px]";
      break;

    case "medium":
      css = "w-[100%] h-[180px]";
      break;

    case "mini":
      css = "w-[100%] h-[200px]";
      break;

    default:
      break;
  }
  return (
    <>
      <img className={css} src={image} />
    </>
  );
};

import React, { forwardRef } from "react";
import { Skeleton } from "../PlaneSkeleton/PlaneSkeleton";
import ImageArray from "./PlaneImageArray";

const ImageSequence = forwardRef(({ progress }, ref) => {
  const newImages = ImageArray();

  // Calculate the index based on progress
  let index = Math.round(progress * (newImages.length - 1));

  // Check if the image is still loading
  if (newImages[index] && newImages[index][1] === "loading") {
    return <Skeleton width="100%" height="100%" />;
  } else {
    // Map through the images and display the appropriate one
    return newImages.map((item, i) => (
      <span
        ref={ref}
        key={i}
        style={{
          display: i !== index ? "none" : "block",
          height: "100%",
          width: "100%",
          backgroundImage: `url('${item[0] ? item[0].src : null}')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
    ));
  }
});

export default ImageSequence;

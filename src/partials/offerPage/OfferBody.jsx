import React from "react";
import OfferPage from "./OfferPage";
import OfferSecFive from "./OfferSecFive";
import OSecTwo from "./OSection2/OSecTwo";
import OSecThree from "./OSection3/OSecThree";

const OfferBody = () => {
  return (
    <div className="w-full overflow-hidden">
      <OfferPage />
      <OSecTwo />
      <OSecThree />
      <OfferSecFive />
    </div>
  );
};

export default OfferBody;

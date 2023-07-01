import React from 'react';
import OfferPage from './OfferPage';
import OfferSecTwo from './OfferSecTwo';
import OfferSecThree from './OfferSecThree';
import OfferSceFour from './OfferSceFour';
import OfferSecFive from './OfferSecFive';
import OfferHeader from './OfferHeader';
import VideoOnScroll from '../../pages/VideoTesting/VideoOnScroll';
import Testing from '../../pages/VideoTesting/Testing';
import OSecThree from './OSection3/OSecThree';
import OSecFour from './OSection4/OSecFour';

const OfferBody = () => {
    return (
        <div>
             <OfferPage/>
            <OfferHeader/>
        <OSecThree/>
           <OSecFour/>
            <OfferSecFive/>
        </div>
    );
};

export default OfferBody;
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
import OSecFive from './OSection5/OSecFive';
import OSecTwo from './OSection2/OSecTwo';

const OfferBody = () => {
    return (
        <div>
             <OfferPage/>
            <OSecTwo/>
        <OSecThree/>
           <OSecFour/>
           <OSecFive/>
            <OfferSecFive/>
        </div>
    );
};

export default OfferBody;
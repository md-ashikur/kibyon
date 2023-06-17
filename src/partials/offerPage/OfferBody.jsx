import React from 'react';
import OfferPage from './OfferPage';
import OfferSecTwo from './OfferSecTwo';
import OfferSecThree from './OfferSecThree';
import OfferSceFour from './OfferSceFour';
import OfferSecFive from './OfferSecFive';
import OfferHeader from './OfferHeader';
import VideoOnScroll from '../../pages/VideoTesting/VideoOnScroll';
import Testing from '../../pages/VideoTesting/Testing';

const OfferBody = () => {
    return (
        <div>
             <OfferPage/>
            <OfferHeader/>
         <Testing/>
            {/* <OfferSecTwo/> */}
            {/* <OfferSecThree/> */}
            <OfferSceFour/>
            <OfferSecFive/>
        </div>
    );
};

export default OfferBody;
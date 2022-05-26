import React from 'react';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner';
import BusinessStats from './BusinessStats';
import Contact from './Contact';
import HomeParts from './PcParts';
import TrustCompany from './TrustCompany';

const Home = () => {
   return (
     <div>
       <Banner/>
       <HomeParts></HomeParts>
       <Reviews></Reviews>
       <BusinessStats />
       <TrustCompany/>
       <Contact/>
     </div>
   );
};

export default Home;
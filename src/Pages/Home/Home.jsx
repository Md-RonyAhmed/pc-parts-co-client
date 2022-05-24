import React from 'react';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner';
import BusinessStats from './BusinessStats';
import Contact from './Contact';
import HomeParts from './PcParts';

const Home = () => {
   return (
     <div>
       <Banner/>
       <HomeParts></HomeParts>
       <Reviews></Reviews>
       <BusinessStats/>
       <Contact/>
     </div>
   );
};

export default Home;
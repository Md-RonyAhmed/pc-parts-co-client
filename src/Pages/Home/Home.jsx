import React from 'react';
import Reviews from '../Reviews/Reviews';
import BusinessStats from './BusinessStats';
import Contact from './Contact';
import HomeParts from './HomeParts';

const Home = () => {
   return (
     <div>
       <HomeParts></HomeParts>
       <Reviews></Reviews>
       <BusinessStats/>
       <Contact/>
     </div>
   );
};

export default Home;
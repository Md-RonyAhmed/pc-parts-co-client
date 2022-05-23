import React from 'react';
import Reviews from '../Reviews/Reviews';
import Contact from './Contact';
import HomeParts from './HomeParts';

const Home = () => {
   return (
     <div>
       <HomeParts></HomeParts>
       <Reviews></Reviews>
       <Contact/>
     </div>
   );
};

export default Home;
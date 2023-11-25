import React from "react";
import Body from './Body';
import Carousel from './Carousel';
import Detail from './Detail';
import Services from './Services';

function Home(){
    return(
        <>
        <Body />
      <Carousel />
      <Services />
      <Detail />
        </>
    )
}
export default Home;
import React, { useEffect } from 'react';

import Slide from './slide';

import './slider.scss';

//code vanilla slider

window.addEventListener('click', onClick, true);

function onClick(e) {
  e.stopPropagation();
  //let numImages = figure.childElementCount;
 let amount = document.querySelectorAll(".slide__img").length;
 console.log(amount);
 let figure = document.querySelectorAll(".slide__item");
 let children = document.querySelectorAll("slide__img");
 let numImages = figure.childElementCount;
 let t = e.target;
 let currImage = 0;
 
 if (t.tagName.toUpperCase() != 'BUTTON')
		return;
 
 if (t.classList.contains('slider__next')) {
   currImage++;
   console.log("clic ++");
 }

 else {
   currImage--;
   console.log("clic --");
 }

}


const Slider = ({ manageLoad, slider }) => {
  useEffect(
    manageLoad,
    [],
  );

  

  return (

    <div className="slider">
    <div className="slider__btn--haut"></div>
    <div id="slider__list">
    <div className="slider__item">
      {
        slider.map((slide) => (
          <Slide key={slide.id} {...slide} />
        
        ))
      }
      </div>
    </div>
    <nav>
    <button className="slider__prev">prev</button>
    <button className="slider__next">next</button>
    </nav>
  </div>


  );
};

export default Slider;

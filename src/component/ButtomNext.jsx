import React from 'react';
import quotes from '../quotes.json'
import { useState } from 'react';


const buttom = ({randomClickPhrases, colors, colorsRandom}) => {
  return (
    <div className='buttom-box'>
      <button className='button-contain' onClick={randomClickPhrases} style= {{background: colors[colorsRandom]}}><i className="fa-solid fa-angle-right"></i></button>
    </div>
  );
};

export default buttom;
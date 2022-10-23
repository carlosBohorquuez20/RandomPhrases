import React from 'react';
import quotes from '../quotes.json'
import ButtomNext from '../component/ButtomNext'
import { useState } from 'react';

const QuoteBox = () => {
  
  const randomPhrases = (Math.floor(Math.random()* quotes.length));
  const [quoteIndex, setQuoteIndex] = useState(randomPhrases);
  
  const colors = [
    "#D65DB1",
    "#845EC2",
    "#008F7A",
    "#B39CD0",
    "#F9F871",
    "#FF6F91",
    "#2C73D2",
    "#0089BA",
    "#FBEAFF",
    "#4D8076",
    "#C34A36",
    "#FF8066",
    "#F3C5FF",
    "#4FFBDF"
  ]

  const colorsRandom= (Math.floor(Math.random() * colors.length));
  document.body.style = `background: ${colors[colorsRandom]}`

  function randomClickPhrases (){
    const randomClick = (Math.floor(Math.random()* quotes.length));
    setQuoteIndex(randomClick)
  }
 
  return (
    <>
    <div className='quotebox'>
      <div className='phrases'>
        <i className="fa-solid fa-quote-left icon-quotation" style= {{color: colors[colorsRandom]}}></i>
        <p style= {{color: colors[colorsRandom]}}>{quotes[quoteIndex].quote}</p>
      </div>
      <div className='authors' style= {{color: colors[colorsRandom]}}>{quotes[quoteIndex].author}</div>
      <ButtomNext randomClickPhrases={randomClickPhrases} colors={colors} colorsRandom={colorsRandom}/>
    </div>
    
     </>
  );
};

export default QuoteBox;
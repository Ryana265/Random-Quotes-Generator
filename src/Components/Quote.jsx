import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Quote() {
  const [quote, setQuote] = useState('');
  const [quoteau, setQuoteAu] = useState('');

  const fetchQuote = async () => {
    const response = await axios.get('https://dummyjson.com/quotes');
    const randomIndex = Math.floor(Math.random() * response.data.quotes.length);
    setQuote(response.data.quotes[randomIndex].quote);
    setQuoteAu(response.data.quotes[randomIndex].author);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="container">
      <h1 className="header">Random Quote Generator</h1>
      <div className="quote-box">
        <p className="quote">"{quote}"</p>
        <p className="author">- {quoteau}</p>
      </div>
      <button className="button" onClick={fetchQuote}>Generate New Quote</button>
    </div>
  );
}

export default Quote;

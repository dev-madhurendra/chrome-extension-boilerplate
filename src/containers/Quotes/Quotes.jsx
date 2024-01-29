import React, { useState, useEffect } from 'react';
import { getQuotes } from '../../services';
import './Quotes.css';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    chrome.storage.sync.get(['quotes'], (result) => {
      const storedQuotes = result.quotes || [];
      if (storedQuotes.length === 0) {
        fetchQuotes();
      } else {
        setQuotes(storedQuotes);
      }
    });
  }, []);

  const fetchQuotes = () => {
    getQuotes()
      .then((res) => {
        const newQuotes = res.data;
        chrome.storage.sync.set({ quotes: newQuotes });
        setQuotes(newQuotes);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <div className="quote-container">
      <div className="quote-card">
        <p className="quote-text">{quotes[0]?.quote}</p>
        <p className="author-text">- {quotes[0]?.author}</p>
      </div>
    </div>
  );
};

export default Quotes;

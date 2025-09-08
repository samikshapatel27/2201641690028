import { useState } from 'react';
import Home from './pages/Home.jsx';

export default function App() {
  const [shortLinks, setShortLinks] = useState([]);

  const handleShorten = (longUrl) => {
    if (!longUrl) return alert('Please enter a URL');

    const shortCode = Math.random().toString(36).substring(2, 8);
    const newShort = {
      long: longUrl,
      short: `https://sho.rt/${shortCode}`,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 7*24*60*60*1000).toISOString(),
      clicks: 0,
      clickData: [],
    };

    setShortLinks([newShort, ...shortLinks]);
  };

  const handleClick = (shortUrl) => {
    setShortLinks(prev => prev.map(link => {
      if (link.short === shortUrl) {
        const newClick = {
          timestamp: new Date().toISOString(),
          referrer: 'https://example.com',
          geo: 'Unknown',
        };
        return { 
          ...link, 
          clicks: link.clicks + 1, 
          clickData: [...link.clickData, newClick] 
        };
      }
      return link;
    }));
  };

  return <Home shortLinks={shortLinks} onShorten={handleShorten} onClick={handleClick} />;
}
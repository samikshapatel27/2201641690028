import { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/ShortenerForm.css';

export default function ShortenerForm({ onShorten }) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onShorten(url);
    setUrl('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="input"
      />
      <button type="submit" className="button">Shorten</button>
    </form>
  );
}

ShortenerForm.propTypes = {
  onShorten: PropTypes.func.isRequired,
};
import ShortenerForm from "../components/ShortenerForm.jsx";
import UrlList from "../components/UrlList.jsx";
import PropTypes from "prop-types";
import '../components/Home.css';


export default function Home({ shortLinks, onShorten, onClick }) {
return (
<div className="container">
<h1 className="title">🔗 URL Shortener</h1>
<p className="subtitle">Shorten URLs and view detailed analytics</p>
<ShortenerForm onShorten={onShorten} />
<UrlList links={shortLinks} onClick={onClick} />
</div>
);
}


Home.propTypes = {
shortLinks: PropTypes.array.isRequired,
onShorten: PropTypes.func.isRequired,
onClick: PropTypes.func.isRequired,
};
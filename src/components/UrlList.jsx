import PropTypes from 'prop-types';
import '../styles/UrlList.css';


export default function UrlList({ links, onClick }) {
if (!links.length) return null;


return (
<ul className="list">
{links.map((link, index) => (
<li key={index} className="list-item">
<div className="link-container">
<a
href={link.long}
target="_blank"
rel="noopener noreferrer"
className="long-link"
onClick={() => onClick(link.short)}
>
{link.short}
</a>
</div>
<div style={{ marginTop: '8px', fontSize: '0.9rem' }}>
<p>Created: {new Date(link.createdAt).toLocaleString()}</p>
<p>Expires: {new Date(link.expiresAt).toLocaleString()}</p>
<p>Total Clicks: {link.clicks}</p>
{link.clickData.length > 0 && (
<details>
<summary>Click Details</summary>
<ul>
{link.clickData.map((click, i) => (
<li key={i}>
{new Date(click.timestamp).toLocaleString()} | {click.referrer} | {click.geo}
</li>
))}
</ul>
</details>
)}
</div>
</li>
))}
</ul>
);
}


UrlList.propTypes = {
links: PropTypes.array.isRequired,
onClick: PropTypes.func.isRequired,
};
/* eslint-disable jsx-a11y/img-redundant-alt */
// CSS
import "./Header.css";

const date = new Date();
const year = date.getFullYear();

const Header = () => {
	return (
		<header className="header">
			<img src="/meme.png" alt="meme photo" className="header--image" />
			<h2 className="header--title">Meme Generator</h2>
			<h4 className="header--project">{year} &copy; Ionut Oltean</h4>
		</header>
	);
};
export default Header;

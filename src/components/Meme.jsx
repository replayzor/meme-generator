import { useEffect, useState } from "react";
// CSS
import "./Meme.css";

const Meme = () => {
	const [meme, setMeme] = useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg",
	});
	const [allMemeImages, setAllMemeImages] = useState([]);

	useEffect(() => {
		const getMemes = async () => {
			const res = await fetch("https://api.imgflip.com/get_memes");
			const data = await res.json();
			setAllMemeImages(data.data.memes);
		};
		getMemes();
	}, []);

	const getMemeImage = () => {
		const randomNumber = Math.floor(Math.random() * allMemeImages.length);
		const url = allMemeImages[randomNumber].url;
		setMeme((prevMeme) => ({
			...prevMeme,
			randomImage: url,
		}));
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	};

	return (
		<main>
			<div className="form">
				<input
					type="text"
					name="topText"
					placeholder="Top text"
					className="form--input"
					value={meme.topText}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="bottomText"
					placeholder="Bottom text"
					className="form--input"
					value={meme.bottomText}
					onChange={handleChange}
				/>
				<button className="form--button" onClick={getMemeImage}>
					Get a new meme image
				</button>
			</div>
			<div className="meme">
				<img
					src={meme.randomImage}
					name="randomImage"
					alt="meme"
					className="meme--image"
				/>
				<h2 className="meme--text top">{meme.topText}</h2>
				<h2 className="meme--text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	);
};

export default Meme;

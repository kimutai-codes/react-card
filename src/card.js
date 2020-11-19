import React from 'react';
import img from './realcoder.jpg';

const card = (props) => {
	return (
		<div className="card">
			<img src={img} alt="this is a real coder pic" />
			<p>Nothing comes easy.Move the needle evryday!</p>
			<p>
				Avoid the endless consumption of tutorials and get your hands
				dirty.You'll cry but it will pay off one day
			</p>
			<span>k-codes.com</span>
		</div>
	);
};

export default card;

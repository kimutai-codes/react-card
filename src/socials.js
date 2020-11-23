import React from 'react';
import './styles/top.css';

import { FaComment } from 'react-icons/fa';
import { FaRetweet } from 'react-icons/fa';

const socials = (props) => {
	return (
		<ul className="socials">
			<li>
				<FaComment />
			</li>
			<li>
				<FaRetweet />
			</li>
			
		</ul>
	);
};

export default socials;

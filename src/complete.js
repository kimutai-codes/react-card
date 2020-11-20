import React from 'react';
import './styles/top.css';

const complete = () => {
	return (
		<div className="complete">
			<p className="top-part">
				Kimutai codes @kimutai-codes
				<br />
				"Starting Small" sucks but that's the way
				<br />
				{'{author:@allano}'}
			</p>
			<div className="card">
				<div className="picha"></div>
				<p className="start">
					Real Learners start From <span className="zero">0</span>
				</p>
				<p className="easy">
					Nothing comes easy.Move the needle everyday!
				</p>
				<p>
					Avoid the endless consumption of tutorials and get your
					hands dirty.You'll cry but it will pay off one day
				</p>
				<span>@k-codes.com</span>
			</div>

		</div>
	);
};

export default complete;

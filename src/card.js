import React from 'react';
import './styles/top.css';
import Socials from './socials'

const complete = (props) => {
	return (
		<div className="card">
			<p className="top-part">
				<span className="k b">Kimutai codes:</span>
				<br />
				Starting Small sucks but that's the way!
				<br />
			</p>
			<div className="inner-card">
				<p className="start">
					{/* Real Learners start From <span className="zero">0</span> */}
					{props.quote}
				</p>
				<p className="easy">
					Nothing comes easy.Move the needle everyday!
				</p>
				<p>
					Avoid the endless consumption of tutorials and get your
					hands dirty.You'll cry but it will pay off one day...
				</p>
				<span className="k">k-codes</span>
			</div>
			<Socials />
		</div>
	);
};

export default complete;

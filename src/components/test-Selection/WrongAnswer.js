import React from 'react';

class WrongAnswer extends React.Component{
	render(){
		return (
			<div className="Selection">
				<h1 id="top-title">What is the title of this wikiHow article?</h1>

				<div className="resultBox">
					<span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
					<div className="result">
						<p>WRONG!</p>
						<p><a href=" ">How To Cook Fish</a></p>
						<button type="submit">Play Again</button>
					</div>
				</div>

			</div>
		);
	}
}

export default WrongAnswer;
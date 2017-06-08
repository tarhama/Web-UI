import React from 'react';
import './sectionContainer1.css';


export default class SectionContainer1 extends React.Component {
	constructor(){
		super();
		this.state = {
			counter:0,
			textToShow:"",
			splitedText:[],
			originText:"DO WHAT YOU WANT TO DO"
		};
		this.setSplitedText = this.setSplitedText.bind(this);
		this.appendLetterToTheRight = this.appendLetterToTheRight.bind(this);
	}
	componentWillMount(){
		this.setSplitedText();
	}
	componentDidMount(){
		setInterval(this.appendLetterToTheRight,200);
	}

	appendLetterToTheRight(){
		if (this.state.counter < this.state.splitedText.length) {
			this.setState({
				textToShow: this.state.textToShow + this.state.splitedText[this.state.counter],
				counter: this.state.counter + 1,
			},() => {
				console.log(this.state.textToShow);
			});
		}
	}
	setSplitedText(){
		this.setState({
			splitedText: this.state.originText.split("")
		}, () => {
			console.log(this.state.splitedText);
		});
	}
	render() {
		return(
			<div className="sectionContainer1">
				<div className="sectionContainer1_overlay">
					<div>
						{this.state.textToShow}
					</div>
				</div>
				<video className="sectionContainer1_video" autoPlay loop muted>
					<source
						src="http://cdn2.editmysite.com/videos/landing-pages/global/home/masthead/masthead-720.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
		)
	}
}

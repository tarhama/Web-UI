import React from 'react';
import './sectionContainer1.css';


export default class SectionContainer1 extends React.Component {
	constructor(){
		super();
		this.state = {
			counterOfLetter: 0,
			counterOfArray:0,
			textToShow: "",
			text:"",
			textData: ["DO WHAT YOU LOVE", "RANDOM TEXT"]
		};
		this.appendLetterToTheRight = this.appendLetterToTheRight.bind(this);
		this.animateText = this.animateText.bind(this);
		this.increaseCounterOfArray = this.increaseCounterOfArray.bind(this);
	}

	componentWillMount(){
		this.setState({
			text: this.state.textData[this.state.counterOfArray]
		});
	}
	componentDidMount(){
		setInterval(this.animateText,200);
	}

	animateText(){
		if(this.state.counterOfLetter < this.state.text.length ){
			this.appendLetterToTheRight();
		}
		else{
			this.increaseCounterOfArray();
			this.setState({
				textToShow: "",
				text: this.state.textData[this.state.counterOfArray],
				counterOfLetter: 0
			});
		}
	}

	appendLetterToTheRight(){
			this.setState({
				textToShow: this.state.textToShow + this.state.text[this.state.counterOfLetter],
				counterOfLetter: this.state.counterOfLetter +1
			});
	}

	//increase counter if indexOfArray is lower than array lenght, if not set the index to 0
	increaseCounterOfArray(){
		if (this.state.counterOfArray < this.state.textData.length -1){
			this.setState({
				counterOfArray: this.state.counterOfArray +1
			});
		}
		else {
			this.setState({
				counterOfArray: 0
			});
		}
	}


	render() {
		return(
			<div className="sectionContainer1">
				<div className="sectionContainer1_animated-text">
					{this.state.textToShow}
				</div>
				<div className="sectionContainer1_overlay">
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

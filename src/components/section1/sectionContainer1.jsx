import React from 'react';
import GeneralBtn from './../buttons/generalBtn';
import './sectionContainer1.css';


export default class SectionContainer1 extends React.Component {
	constructor(){
		super();
		this.state = {
			counterOfLetter: 0,
			counterOfArray: 0,
			timeOfTick: 200,
			textToShow: "",
			text: "",
			textData: ["DO WHAT YOU LOVE", "RANDOM TEXT"],
			calc: 1,
			heightDiff: 0
		};
		this.appendLetterToTheRight = this.appendLetterToTheRight.bind(this);
		this.animateText = this.animateText.bind(this);
		this.increaseCounterOfArray = this.increaseCounterOfArray.bind(this);
		this.animateNextWorld = this.animateNextWorld.bind(this);
		this.moveUpVideo = this.moveUpVideo.bind(this);
		this.animateNextWorld = this.animateNextWorld.bind(this);
		this.handleScroll = this.handleScroll.bind(this);
		this.moveUpVideo = this.moveUpVideo.bind(this);
	}

	componentWillMount(){
		this.setState({
			text: this.state.textData[this.state.counterOfArray]
		});
	}
	componentDidMount(){
		this.moveUpVideo();
		window.addEventListener('scroll', this.handleScroll);
		window.addEventListener('scroll', this.moveUpVideo);
		window.addEventListener('resize', this.moveUpVideo);
		setInterval(this.animateText, 200);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
		window.removeEventListener('resize', this.moveUpVideo);
		window.addEventListener('resize', this.moveUpVideo);
	}

	animateText(){
		if(this.state.counterOfLetter < this.state.text.length ){
			this.appendLetterToTheRight()
		}
		else{
			this.animateNextWorld();
		}
	}

	animateNextWorld(){
		this.increaseCounterOfArray();
		this.setState({
			textToShow: "",
			text: this.state.textData[this.state.counterOfArray],
			counterOfLetter: 0
		});
	}

	appendLetterToTheRight(){
			this.setState({
				textToShow: this.state.textToShow + this.state.text[this.state.counterOfLetter],
				counterOfLetter: this.state.counterOfLetter + 1
			});
	}

	//increase counter if indexOfArray is lower than array lenght, if not set the index to 0
	increaseCounterOfArray(){
		if (this.state.counterOfArray < this.state.textData.length - 1){
			this.setState({
				counterOfArray: this.state.counterOfArray + 1
			});
		}
		else {
			this.setState({
				counterOfArray: 0
			});
		}
	}
	moveUpVideo() {
		const videoHeight = this.video.offsetHeight;
		const containerHeight = this.container1.offsetHeight;
		const heightDiff = videoHeight - containerHeight;
		this.setState({ heightDiff });
		this.video.style.top = `-${heightDiff}px`;
	}
	handleScroll() {
	const range = 200;
	const scrollTop = window.scrollY;
	const containerNode = this.container1;
	const nodeHeight = containerNode.offsetHeight;
	const offsetFromTop = containerNode.offsetTop;
	let offsetTop = offsetFromTop;
	offsetTop = offsetTop + nodeHeight / 1.5;
	const calc = 1 - (scrollTop - offsetTop + range) / range;
	let scrollPosition = this.state.calc;
  containerNode.style.opacity = scrollPosition;
  this.setState({ calc });

	if (calc > 1) {
    containerNode.style.opacity = scrollPosition;
  } else if (calc < 0) {
    containerNode.style.opacity = scrollPosition;
  }
	}
	render() {
		return(
			<div className="sectionContainer1" ref={div => this.container1 = div}>
				<div className="section1-wrapper">
					<div className="sectionContainer1_animated-text">
						{this.state.textToShow}
					</div>
					<div className="sectionContainer1-button">
						<GeneralBtn  btnText="More Featured Themes"/>
					</div>
				</div>
				<div className="sectionContainer1_overlay">
				</div>
				<video className="sectionContainer1_video" ref={video => this.video = video} autoPlay loop muted>
					<source
						src="http://cdn2.editmysite.com/videos/landing-pages/global/home/masthead/masthead-720.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
		)
	}
}

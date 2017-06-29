import React, {Component} from 'react';
import TextContent from './textContent/textContent';
import GeneralBtn from './../../components/buttons/generalBtn';
import LinkBtn from './../../components/buttons/linkBtn';

import './section6Container.scss';

class Section6Container extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     btn_text: this.props.buttons[0].name,
        //     btn_link_text: this.props.buttons[1].name,
        // };
    }


    render() {
        const videoLink = "//cdn2.editmysite.com/videos/landing-pages/global/home-weebly4/v2/cs/cs.mp4";
        return (
            <div className="containerSec6">
                <video className="videoSec6" ref={video => this.video = video}
                       playsInline autoPlay muted loop>
                    <source src={videoLink} type="video/mp4"/>
                </video>
                <div className="Container">
                    <TextContent ContentJSON = {this.props.Section6JSON} />
                    <div className="pt-4 d-flex align-items-center justify-content-center">
                        <GeneralBtn style='filled' btnText="Get Started"/>
                        <LinkBtn btnText="More Info"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section6Container;

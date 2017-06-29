import React from 'react';
import GeneralBtn from './../../../components/buttons/generalBtn';

const SectionContent5 = ({
													 titleSection5,
													 headingSection5,
													 btnSection5,
													 apple: {src: src1, alt: alt1},
													 google: {src: src2, alt: alt2}
												 }) => (

	<div className="landing-page-content">
		<h2 className="h1 section5-title opacity">{titleSection5}</h2>
		<p className="section5-text opacity">{headingSection5}</p>
		<GeneralBtn style="filled" btnText={btnSection5}/>
		<div className="app-icon opacity">
			<img src={src1}
					 alt={alt1}/>
			<img src={src2}
					 alt={alt2}/>
		</div>
	</div>
);

export default SectionContent5;




import React from 'react';
import GeneralBtn from './../../../components/buttons/generalBtn';

import Title from '../../titleSubtitle/title';

const SectionContent5 = ({
													 titleSection5,
													 headingSection5,
													 btnSection5,
													 apple: {src: src1, alt: alt1},
													 google: {src: src2, alt: alt2}
												 }) => (

	<div className="landing-page-content">
		<Title
			titleText={titleSection5}
			center = {'left'}
			subTitle={headingSection5}
			subTitleColor = {'white'}
		/>
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




import React, { Component } from 'react';
import HeaderSection9 from './header/headerSection9';
import ColumnsSec9 from './columns/columnsSec9';
import GeneralBtn from './../../components/buttons/generalBtn';
import "./section9Container.scss";

const  Section9Container = (props) => {

    const btntext = props.Section9JSON.button;

    return(
      <div className="section9">
      <div className="container">
        <HeaderSection9 />
        <ColumnsSec9 />
        <GeneralBtn btnText={btntext}/>
      </div>
      </div>
    )

};

export default Section9Container;

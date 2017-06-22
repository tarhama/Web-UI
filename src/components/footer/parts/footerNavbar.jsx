import React from 'react';

import './footerList.css';
import Facebook from 'react-icons/lib/fa/facebook';

import Twitter from 'react-icons/lib/fa/twitter';
import YT from 'react-icons/lib/fa/youtube';
import GP from 'react-icons/lib/fa/google-plus';
import Instagram from 'react-icons/lib/fa/instagram';


const FooterList = () =>
    <div className="d-flex justify-content-between align-items-baseline down_footer flex-wrap">
                <span className="footer_links text-white" id="Footer_Links">
                    © Weebly, Inc. Terms Privacy Policy
                </span>
        <div className="footer-social-network d-flex justify-content-center" id="FooterSocialLinks">
            <span className="blue-circle-border"><Facebook /></span>
            <span className="blue-circle-border"><Twitter /></span>
            <span className="blue-circle-border"><YT /></span>
            <span className="blue-circle-border"><GP /></span>
            <span className="blue-circle-border"><Instagram /></span>
        </div>
        <span className="footer_dropdown pr-2 flex col-sm-auto ">
            <span className="footer_links footer_dropdown_links pointer"><a></a><span className="small">&#9660;</span></span>
            <div className="footer_dropdown__content">
              <ul className="li_no-decoration " id="LanguageList">
              </ul>
            </div>
          </span>
    </div>;


export default FooterList;

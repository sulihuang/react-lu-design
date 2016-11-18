import React from 'react';
import { injectIntl } from 'react-intl';
import DocumentTitle from 'react-document-title';
import Link from './Link';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
// To store style which is only for Home and has conflicts with others.
function getStyle() {
  return `
    #react-content,
    #react-content > div {
      height: 100%;
    }
    .main-wrapper {
      background: transparent;
      width: auto;
      margin: 0;
      border-radius: 0;
      padding: 0;
      overflow: unset;
      display: inline;
      min-height: 600px;
    }
    #header,#header.home-nav-white {
      background: rgba(255, 255, 255, 0.9);
      position: fixed;
      z-index: 999;
      border-bottom: 1px solid transparent;
      border-bottom-color: #EBEDEE;
      transition: border .5s cubic-bezier(0.455, 0.03, 0.515, 0.955), background .5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    #header .lud-select-selection,
    #header .ant-menu {
      background: transparent;
    }

    .home-nav-white #search-box {
      border-left-color: #EBEDEE;
    }
    .home-nav-white #nav a {
      color: #666;
    }
    .home-nav-white .lang:not(:hover) {
      color: #666;
      border-color: #666;
    }
    .nav-phone-icon:before {
      background: #eee;
      box-shadow: 0 7px 0 0 #eee, 0 14px 0 0 #eee;
    }
    .home-nav-white .nav-phone-icon:before {
      background: #777;
      box-shadow: 0 7px 0 0 #777, 0 14px 0 0 #777;
    }
    
    #search-box {
      border-left-color: rgba(235, 237, 238, .5);
      transition: border 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    section {
      height: 100%;
      width: 100%;
      background: #fff;
    }
    #footer {
      background: #000;
    }
    #footer,
    #footer h2 {
      color: #999;
    }
    #footer a {
      color: #eee;
    }
    .down {
      animation: upDownMove 1.2s ease-in-out infinite;
    }
  `;
}

function Home(props) {
  return (
    <DocumentTitle title={'Lu Design - 中后台设计语言'}>
      <div className="main-wrapper">
        <Link />
        <Banner {...props} />
        <Page1 {...props} />
        <Page2 {...props} />
        <Page3 {...props} />
        <style dangerouslySetInnerHTML={{ __html: getStyle() }} />
      </div>
    </DocumentTitle>
  );
}

export default injectIntl(Home);

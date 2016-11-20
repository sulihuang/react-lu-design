import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Modal } from 'react-lu-design';
import { version as ludVersion } from 'react-lu-design/package.json';
import { docVersions } from '../../';

docVersions[ludVersion] = ludVersion;

class Footer extends React.Component {
 /*
  componentDidMount() {
    // for some iOS
    // http://stackoverflow.com/a/14555361
    // 大版本发布后全局弹窗提示
    //   1. 点击『知道了』之后不再提示
    //   2. 超过截止日期后不再提示
    if (localStorage.getItem('react-lu-design@2.0.0-notification-sent') !== 'true' &&
        Date.now() < new Date('2016/10/14').getTime()) {
      this.infoNewVersion();
    }
  }
  */

  infoNewVersion() {
    const messages = this.props.intl.messages;
    Modal.info({
      title: messages['app.publish.title'],
      content: (
        <div>
          <img src="https://os.alipayobjects.com/rmsportal/nyqBompsynAQCpJ.svg" alt="Lu Design" />
          <p>
            {messages['app.publish.greeting']}
            <a target="_blank" rel="noopener noreferrer" href="/changelog">react-lu-design@2.0.0</a>
            {messages['app.publish.intro']}
            {messages['app.publish.old-version-guide']}
            <a target="_blank" rel="noopener noreferrer" href="http://1x.ant.design">1x.ant.design</a>
            {messages['app.publish.old-version-tips']}
          </p>
        </div>
      ),
      okText: 'OK',
      onOk: () => localStorage.setItem('react-lu-design@2.0.0-notification-sent', 'true'),
      className: 'new-version-info-modal',
      width: 470,
    });
  }

  handleVersionChange = (url) => {
    window.location.href = window.location.href.replace(window.location.origin, url);
  }

  render() {
    return (
      <footer id="footer">
        <ul>

          <li>
            <h2><FormattedMessage id="app.footer.community" /></h2>
            <div>
              <a target="_blank" rel="noopener noreferrer" href="/changelog">
                <FormattedMessage id="app.footer.change-log" />
              </a>
            </div>

          </li>
          <li>
            <div>©2016 ZhuluX Inc.</div>
            <div>Powered by <a href="https://github.com/benjycui/bisheng">BiSheng</a></div>
            <div style={{ marginTop: 10 }}>
              <FormattedMessage id="app.footer.version" /> {ludVersion}
            </div>
          </li>
        </ul>
      </footer>
    );
  }
}

export default injectIntl(Footer);

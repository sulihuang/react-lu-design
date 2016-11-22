import React from 'react';
import classNames from 'classnames';
import CopyableIcon from './CopyableIcon';

export default class IconSet extends React.Component {
  static defaultProps = {
    icons: [],
  }

  icons = {
    default: ['android', 'apple', 'appleo', 'appstore', 'appstoreo', 'areachart', 'arrowdown', 'arrowleft', 'arrowright', 'arrowsalt', 'arrowup', 'banckward', 'barchart', 'bars', 'bars1', 'barschart', 'barschart1', 'book', 'book1', 'calculator', 'calendar', 'camera', 'camerao', 'caretdown', 'caretleft', 'caretright', 'caretup', 'check', 'checkcircle', 'checkcircleo', 'checksquare', 'checksquareo', 'chrome', 'circledown', 'circledowno', 'clockcircle', 'clockcircle1', 'clockcircleo', 'clockcircleo1', 'close', 'closecircle', 'closecircleo', 'closesquare', 'closesquareo', 'cloud', 'clouddownload', 'clouddownloado', 'cloudo', 'cloudupload', 'clouduploado', 'codesquare', 'codesquareo', 'codesquareo1', 'comments', 'copy', 'creditcard', 'creditcard1', 'customerservice', 'customerservice1', 'delete', 'dislike', 'dotchart', 'doubleleft', 'doubleright', 'down', 'downcircle', 'downcircleo', 'download', 'downsquare', 'downsquareo', 'edit', 'ellipsis', 'enter', 'enviroment', 'enviromento', 'exception', 'exclamation', 'exclamationcircle', 'exclamationcircleo', 'exclefile', 'export', 'export2', 'eye', 'eyeo', 'facebookofficial', 'fastbackward', 'fastforward', 'file', 'filetext', 'filter', 'folder', 'folderopen', 'forward', 'frown', 'frowno', 'github', 'hdd', 'heart', 'hearto', 'home', 'iconfontdesktop', 'inbox', 'info', 'infocirlce', 'infocirlceo', 'jpgfile', 'laptop', 'left', 'leftcircle', 'leftcircleo', 'leftsquare', 'leftsquareo', 'like', 'linechart', 'link', 'linkedinsquare', 'loading', 'lock', 'logout', 'logs', 'mail', 'meh', 'meho', 'menufold', 'menuunfold', 'message', 'minus', 'minuscircle', 'minuscircleo', 'minussquare', 'minussquareo', 'mobile', 'newcustom14', 'newcustom32', 'newcustom33', 'newcustom34', 'newcustom40', 'newcustom41', 'newcustom42', 'newcustom43', 'newcustom44', 'newcustom45', 'newcustom46', 'newcustom47', 'newcustom52', 'newcustom54', 'newcustom55', 'newcustom57', 'newcustom60', 'newcustom63', 'newcustom65', 'newcustom66', 'newcustom67', 'newcustom68', 'newcustom69', 'newcustom70', 'newcustom71', 'newcustom72', 'newcustom73', 'newcustom74', 'newcustom76', 'newcustom77', 'newcustom78', 'newcustom80', 'newcustom81', 'newcustom82', 'newcustom83', 'newcustom84', 'newcustom86', 'newcustom88', 'newcustom90', 'newcustom91', 'newcustom93', 'newcustom94', 'newcustom95', 'newcustom96', 'newcustom97', 'newcustom98', 'newcustom99', 'newopportunity', 'newpersonaccount', 'notification', 'office365', 'organization', 'paperclip', 'pause', 'pause1', 'pausecircle', 'pausecircle1', 'pausecircleo', 'pausecircleo1', 'paycircle', 'paycircleo', 'pdffile', 'phone', 'picture', 'piechart', 'play', 'playcircleo', 'plus', 'pluscircle', 'pluscircleo', 'plussquare', 'plussquareo', 'poweroff', 'pptfile', 'pushpin', 'pushpino', 'qq02', 'qrcode', 'question', 'question1', 'questioncircle', 'questioncircle1', 'questioncircleo', 'questioncircleo1', 'reload', 'retweet', 'right', 'rightcircle', 'rightcircleo', 'rightsquare', 'rightsquareo', 'rollback', 'save', 'scan', 'search', 'setting', 'setupassistantguide', 'sharealt', 'ship', 'shoppingcart', 'shrink', 'skype', 'smile', 'smileo', 'sms', 'solution', 'sql', 'star', 'staro', 'stepbackward', 'stepforward', 'swap', 'swap1', 'swapleft', 'swapright', 'tablet', 'tag', 'tago', 'tags', 'tagso', 'team', 'totop', 'twitter', 'unknowfile', 'unlock', 'up', 'upcircle', 'upcircleo', 'upload', 'upsquare', 'upsquareo', 'user', 'verticleleft', 'verticleright', 'videocamera', 'wechat', 'weibo', 'windows', 'windowso', 'wordfile'],
  };

  render() {
    const { className, catigory } = this.props;
    const listClassName = classNames({
      'lud-icons-list': true,
      clearfix: true,
      [className]: !!className,
    });
    return (
      <ul className={listClassName}>
        {this.icons[catigory].map((type, i) => <CopyableIcon key={i} type={type} />)}
      </ul>
    );
  }
}

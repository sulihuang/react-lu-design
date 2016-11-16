webpackJsonp([82,129],{1051:function(t,e,d){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var n=d(1),r=(o(n),d(2));o(r);t.exports={content:["section",["h2","\u4f55\u65f6\u4f7f\u7528"],["p","\u6587\u4ef6\u5939\u3001\u7ec4\u7ec7\u67b6\u6784\u3001\u751f\u7269\u5206\u7c7b\u3001\u56fd\u5bb6\u5730\u533a\u7b49\u7b49\uff0c\u4e16\u95f4\u4e07\u7269\u7684\u5927\u591a\u6570\u7ed3\u6784\u90fd\u662f\u6811\u5f62\u7ed3\u6784\u3002\u4f7f\u7528",["code","\u6811\u63a7\u4ef6"],"\u53ef\u4ee5\u5b8c\u6574\u5c55\u73b0\u5176\u4e2d\u7684\u5c42\u7ea7\u5173\u7cfb\uff0c\u5e76\u5177\u6709\u5c55\u5f00\u6536\u8d77\u9009\u62e9\u7b49\u4ea4\u4e92\u529f\u80fd\u3002"]],meta:{category:"Components",type:"Data Display",title:"Tree",subtitle:"\u6811\u5f62\u63a7\u4ef6",filename:"components/tree/index.md"},toc:["ul",["li",["a",{href:"#\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{href:"#API"},"API"]],["li",["a",{href:"#\u6ce8\u610f"},"\u6ce8\u610f"]]],api:["section",["h2","API"],["h3","Tree props"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","multiple"],["td","\u652f\u6301\u70b9\u9009\u591a\u4e2a\u8282\u70b9\uff08\u8282\u70b9\u672c\u8eab\uff09"],["td","bool"],["td","false"]],["tr",["td","checkable"],["td","\u8282\u70b9\u524d\u6dfb\u52a0 Checkbox \u590d\u9009\u6846"],["td","bool"],["td","false"]],["tr",["td","defaultExpandAll"],["td","\u9ed8\u8ba4\u5c55\u5f00\u6240\u6709\u6811\u8282\u70b9"],["td","bool"],["td","false"]],["tr",["td","defaultExpandedKeys"],["td","\u9ed8\u8ba4\u5c55\u5f00\u6307\u5b9a\u7684\u6811\u8282\u70b9"],["td","String[]"],["td","[]"]],["tr",["td","expandedKeys"],["td","\uff08\u53d7\u63a7\uff09\u5c55\u5f00\u6307\u5b9a\u7684\u6811\u8282\u70b9"],["td","String[]"],["td","[]"]],["tr",["td","autoExpandParent"],["td","\u662f\u5426\u81ea\u52a8\u5c55\u5f00\u7236\u8282\u70b9"],["td","bool"],["td","true"]],["tr",["td","defaultCheckedKeys"],["td","\u9ed8\u8ba4\u9009\u4e2d\u590d\u9009\u6846\u7684\u6811\u8282\u70b9"],["td","String[]"],["td","[]"]],["tr",["td","checkedKeys"],["td","\uff08\u53d7\u63a7\uff09\u9009\u4e2d\u590d\u9009\u6846\u7684\u6811\u8282\u70b9\uff08\u6ce8\u610f\uff1a\u7236\u5b50\u8282\u70b9\u6709\u5173\u8054\uff0c\u5982\u679c\u4f20\u5165\u7236\u8282\u70b9key\uff0c\u5219\u5b50\u8282\u70b9\u81ea\u52a8\u9009\u4e2d\uff1b\u76f8\u5e94\u5f53\u5b50\u8282\u70b9key\u90fd\u4f20\u5165\uff0c\u7236\u8282\u70b9\u4e5f\u81ea\u52a8\u9009\u4e2d\u3002\u5f53\u8bbe\u7f6e",["code","checkable"],"\u548c",["code","checkStrictly"],"\uff0c\u5b83\u662f\u4e00\u4e2a\u6709",["code","checked"],"\u548c",["code","halfChecked"],"\u5c5e\u6027\u7684\u5bf9\u8c61\uff0c\u5e76\u4e14\u7236\u5b50\u8282\u70b9\u7684\u9009\u4e2d\u4e0e\u5426\u4e0d\u518d\u5173\u8054"],["td","String[]/{checked:Array",["string"],",halfChecked:Array",["string"],"}"],["td","[]"]],["tr",["td","checkStrictly"],["td","checkable\u72b6\u6001\u4e0b\u8282\u70b9\u9009\u62e9\u5b8c\u5168\u53d7\u63a7\uff08\u7236\u5b50\u8282\u70b9\u9009\u4e2d\u72b6\u6001\u4e0d\u518d\u5173\u8054\uff09"],["td","bool"],["td","false"]],["tr",["td","defaultSelectedKeys"],["td","\u9ed8\u8ba4\u9009\u4e2d\u7684\u6811\u8282\u70b9"],["td","String[]"],["td","[]"]],["tr",["td","selectedKeys"],["td","\uff08\u53d7\u63a7\uff09\u8bbe\u7f6e\u9009\u4e2d\u7684\u6811\u8282\u70b9"],["td","String[]"],["td","-"]],["tr",["td","onExpand"],["td","\u5c55\u5f00/\u6536\u8d77\u8282\u70b9\u65f6\u89e6\u53d1"],["td","function(expandedKeys, {expanded: bool, node})"],["td","-"]],["tr",["td","onCheck"],["td","\u70b9\u51fb\u590d\u9009\u6846\u89e6\u53d1"],["td","function(checkedKeys, e:{checked: bool, checkedNodes, node, event})"],["td","-"]],["tr",["td","onSelect"],["td","\u70b9\u51fb\u6811\u8282\u70b9\u89e6\u53d1"],["td","function(selectedKeys, e:{selected: bool, selectedNodes, node, event})"],["td","-"]],["tr",["td","filterTreeNode"],["td","\u6309\u9700\u7b5b\u9009\u6811\u8282\u70b9\uff08\u9ad8\u4eae\uff09\uff0c\u8fd4\u56detrue"],["td","function(node)"],["td","-"]],["tr",["td","loadData"],["td","\u5f02\u6b65\u52a0\u8f7d\u6570\u636e"],["td","function(node)"],["td","-"]],["tr",["td","onRightClick"],["td","\u54cd\u5e94\u53f3\u952e\u70b9\u51fb"],["td","function({event,node})"],["td","-"]],["tr",["td","draggable"],["td","\u8bbe\u7f6e\u8282\u70b9\u53ef\u62d6\u62fd\uff08IE>8\uff09"],["td","bool"],["td","false"]],["tr",["td","onDragStart"],["td","\u5f00\u59cb\u62d6\u62fd\u65f6\u8c03\u7528"],["td","function({event,node})"],["td","-"]],["tr",["td","onDragEnter"],["td","dragenter \u89e6\u53d1\u65f6\u8c03\u7528"],["td","function({event,node,expandedKeys})"],["td","-"]],["tr",["td","onDragOver"],["td","dragover \u89e6\u53d1\u65f6\u8c03\u7528"],["td","function({event,node})"],["td","-"]],["tr",["td","onDragLeave"],["td","dragleave \u89e6\u53d1\u65f6\u8c03\u7528"],["td","function({event,node})"],["td","-"]],["tr",["td","onDragEnd"],["td","dragend \u89e6\u53d1\u65f6\u8c03\u7528"],["td","function({event,node})"],["td","-"]],["tr",["td","onDrop"],["td","drop \u89e6\u53d1\u65f6\u8c03\u7528"],["td","function({event, node, dragNode, dragNodesKeys})"],["td","-"]]]],["h3","TreeNode props"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","disabled"],["td","\u7981\u6389\u54cd\u5e94"],["td","bool"],["td","false"]],["tr",["td","disableCheckbox"],["td","\u7981\u6389 checkbox"],["td","bool"],["td","false"]],["tr",["td","title"],["td","\u6807\u9898"],["td","String/element"],["td","'---'"]],["tr",["td","key"],["td","\u88ab\u6811\u7684 (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys \u5c5e\u6027\u6240\u7528\u3002\u6ce8\u610f\uff1a\u6574\u4e2a\u6811\u8303\u56f4\u5185\u7684\u6240\u6709\u8282\u70b9\u7684 key \u503c\u4e0d\u80fd\u91cd\u590d\uff01"],["td","String"],["td","\u5185\u90e8\u8ba1\u7b97\u51fa\u7684\u8282\u70b9\u4f4d\u7f6e"]],["tr",["td","isLeaf"],["td","\u8bbe\u7f6e\u4e3a\u53f6\u5b50\u8282\u70b9"],["td","bool"],["td","false"]]]],["h2","\u6ce8\u610f"],["p","\u6811\u8282\u70b9\u53ef\u4ee5\u6709\u5f88\u591a\uff0c\u4f46\u5728\u8bbe\u7f6e",["code","checkable"],"\u65f6\u3001\u5c06\u4f1a\u82b1\u8d39\u66f4\u591a\u7684\u8ba1\u7b97\u65f6\u95f4\uff0c\u56e0\u6b64\u6211\u4eec\u7f13\u5b58\u4e86\u4e00\u4e9b\u8ba1\u7b97\u7ed3\u679c(\u50cf",["code","this.treeNodesStates"],")\u6765\u590d\u7528\u3001\u907f\u514d\u591a\u6b21\u91cd\u590d\u8ba1\u7b97\u3001\u4ee5\u6b64\u63d0\u9ad8\u6027\u80fd\u3002\u4f46\u8fd9\u4e5f\u5e26\u6765\u4e86\u4e00\u4e9b\u9650\u5236\uff0c\u5f53\u4f60\u5f02\u6b65\u52a0\u8f7d\u6811\u8282\u70b9\u65f6\uff0c\u4f60\u9700\u8981\u8fd9\u6837\u6e32\u67d3\u6811\uff1a",["code","{this.state.treeData.length ? <Tree ...>{this.state.treeData.map(t => <TreeNode ... />)}</Tree> : 'loading tree'}"]]]}}});
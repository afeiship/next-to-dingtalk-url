/*!
 * name: @feizheng/next-to-dingtalk-url
 * description: Wrap url in dingtalk.
 * homepage: https://github.com/afeiship/next-to-dingtalk-url
 * version: 1.0.0
 * date: 2020-07-23T09:36:27.692Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var BRIDGE_PREFIX = 'dingtalk://dingtalkclient/page/link?pc_slide=true&url=';

  nx.toDingtalkUrl = function (inUrl) {
    if (!inUrl) return inUrl;
    var encoded = encodeURIComponent(inUrl);
    return BRIDGE_PREFIX + encoded
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.toDingtalkUrl;
  }
})();

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var BRIDGE_PREFIX = 'dingtalk://dingtalkclient/page/link?pc_slide=true&url=';

  nx.toDingtalkUrl = function (inUrl) {
    if (!inUrl) return inUrl;
    var encoded = encodeURIComponent(inUrl);
    return BRIDGE_PREFIX + encoded;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.toDingtalkUrl;
  }
})();

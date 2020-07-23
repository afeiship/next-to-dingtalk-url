const nx = require('@feizheng/next-js-core2');
require('../src/next-to-dingtalk-url');

describe('api.basic test', () => {
  test('nx.toDingtalkUrl should hava dingtalk:// protocal', function() {
    const url = 'https://www.mipengine.org/';
    const dingUrl = nx.toDingtalkUrl(url);
    // console.log(dingUrl);
    expect(dingUrl.includes('dingtalk://')).toBe(true);
  });
});

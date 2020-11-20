(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.toDingtalkUrl should hava dingtalk:// protocal', function () {
      const url = 'https://www.mipengine.org/';
      const dingUrl = nx.toDingtalkUrl(url);
      expect(dingUrl.includes('dingtalk://')).toBe(true);
    });
  });
})();

# next-to-dingtalk-url
> Wrap url in dingtalk.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-to-dingtalk-url
```

## usage
```js
import '@feizheng/next-to-dingtalk-url';

const url = 'https://www.mipengine.org/';
const dingUrl = nx.toDingtalkUrl(url);

console.log(dingUrl);
// dingtalk://dingtalkclient/page/link?pc_slide=true&url=https%3A%2F%2Fwww.mipengine.org%2F
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-to-dingtalk-url/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-to-dingtalk-url
[version-url]: https://npmjs.org/package/@feizheng/next-to-dingtalk-url

[license-image]: https://img.shields.io/npm/l/@feizheng/next-to-dingtalk-url
[license-url]: https://github.com/afeiship/next-to-dingtalk-url/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-to-dingtalk-url
[size-url]: https://github.com/afeiship/next-to-dingtalk-url/blob/master/dist/next-to-dingtalk-url.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-to-dingtalk-url
[download-url]: https://www.npmjs.com/package/@feizheng/next-to-dingtalk-url

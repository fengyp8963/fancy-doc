# Api参考

VitePress has built in native support for [Carbon Ads](https://www.carbonads.net). By defining the Carbon Ads credentials in config, VitePress will display ads on the page.

## 中英文翻译

```js
module.exports = {
  themeConfig: {
    carbonAds: {
      carbon: 'your-carbon-key',
      custom: 'your-carbon-custom',
      placement: 'your-carbon-placement'
    }
  }
}
```

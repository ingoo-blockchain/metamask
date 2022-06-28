# React 에서 Web3 라이브러리 사용하기

웹팩설정해야됨!

```
npm install -D customize-cra react-app-rewired
```

**package.json**

```
"scripts":{
    "start":"react-app-rewired start"
}
```

**config-overrides.js**

```
const { override, addWebpackAlias } = require('customize-cra')

module.exports = override(
    config => {
        config.optimization = {
            ...config.optimization,
            minimizer: config.optimization.minimize[0]
        }
        return config
    }
)
```

npm install -D react-app-rewired crypto-browserify stream-browserify assert stream-http https-browserify os-browserify url
https://thealiraza.medium.com/how-to-set-up-web3-js-with-react-18-and-webpack5-without-2228a5f4626f

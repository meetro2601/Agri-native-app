module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [['expo-router/babel'],
      // [
      //   "module-resolver",
      //   {
      //     root: ["."],
      //     alias: {
      //       utils: "./utils",
      //       assets: "./assets"
      //     }
      //   }
      // ],
      ["module:react-native-dotenv", {
        envName: "APP_ENV",
        moduleName: "@env",
        path: ".env",
        // "blocklist": null,
        // "allowlist": null,
        // "safe": false,
        // "allowUndefined": true,
        // "verbose": false
      }]
    ]
  };
};

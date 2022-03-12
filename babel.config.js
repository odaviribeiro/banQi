module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          "paths": [
            {
              "rootPathSuffix": "./src/components",
              "rootPathPrefix": "@/components"
            },
            {
              "rootPathSuffix": "./src/pages",
              "rootPathPrefix": "@/pages"
            },
          ]
        }
      ],
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
        "blacklist": null,
        "whitelist": null,
        "safe": false,
        "allowUndefined": true
      }]
    ],
  };
};

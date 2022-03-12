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
            {
              "rootPathSuffix": "./src/interfaces",
              "rootPathPrefix": "@/interfaces"
            },
            {
              "rootPathSuffix": "./src/theme",
              "rootPathPrefix": "@/theme"
            },
            {
              "rootPathSuffix": "./src/service",
              "rootPathPrefix": "@/service"
            },
            {
              "rootPathSuffix": "./src/routes",
              "rootPathPrefix": "@/routes"
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

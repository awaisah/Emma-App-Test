module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['.'],
                extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
                alias: {
                    "src": "./src",
                    "assets": "./src/assets",
                    "avatars": "./src/assets/avatars",
                    "components": "./src/components",
                    "navigations": "./src/navigations",
                    "utils": "./src/utils",
                    "styles": "./src/styles",
                    "scenes": "./src/scenes"
                },
            },
        ]
    ]
};

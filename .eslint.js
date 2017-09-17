module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
      "module": false
    },
    "extends": [
      "eslint:recommended",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": ["error", 2],
        "linebreak-style": ["error","unix"],
        "quotes": ["error","single"],
        "semi": ["error","never"],
        "padded-blocks": ["error","never"],
        "no-trailing-spaces": ["error",{"skipBlankLines": false}],
        "space-before-blocks": ["error","always"],
        "no-unused-vars": ["error", {"varsIgnorePattern": "style"}],
        "react/no-unused-prop-types": [2],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "no-console": 0
    }
};

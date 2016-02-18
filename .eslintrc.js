module.exports = {
    "env": {
        "browser": true
    },
    "extends": "./node_modules/lab/lib/linters/eslint/.eslintrc.js",
    "rules": {
        "no-shadow": [
           2,
           { "allow": ["err", "done", "server", "next", "res"] }
       ]
    }
};

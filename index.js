module.exports = {
    "extends": "@pod-point/eslint-config-podpoint-base",
    "rules": {
        "strict": "off",
        "eqeqeq": "off",
        "no-unused-vars": "off",
        "class-methods-use-this": "off",
        "no-console": "off",
        "comma-dangle": [
            "error", {
                "arrays": "always",
                "objects": "always",
                "imports": "ignore",
                "exports": "ignore",
                "functions": "never"
            }
        ]
    }
};

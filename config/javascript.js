module.exports = function() {
    return {
        "tasks": {
            "eslint": {
                "options": {
                    "format": "stylish",
                },
                "all": [
                    "*.js",
                    "**/*.js",
                    "!node_modules/**/*",
                ],
            },
        },
    };
};

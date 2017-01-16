module.exports = function() {
    return {
        "tasks": {
            "eslint": {
                "options": {
                    "format": "stylish",
                },
                "all": [
                    "*.js",
                    "!node_modules/**/*",
                ],
            },
        },
    };
};

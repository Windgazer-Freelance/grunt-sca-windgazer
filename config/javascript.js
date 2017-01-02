module.exports = {
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

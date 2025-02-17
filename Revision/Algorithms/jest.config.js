export default {
    testEnvironment: "node",
    testMatch: ["**/__test__/**/*.test.js"],
    transform: {
        "^.+\\.[tj]sx?$": "babel-jest",
    },
};

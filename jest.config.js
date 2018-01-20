module.exports = {
	bail: true,
	globals: {
		"ts-jest": {
			tsConfigFile: "./tsconfig.test.json",
		}
	},
	setupTestFrameworkScriptFile: "./test/test-setup.ts",
	transform: {
		"^.+\\.(ts|js|html)$": "<rootDir>/node_modules/jest-preset-angular/preprocessor.js"
	},
	moduleNameMapper: {
		"@speedy/(.*)": "<rootDir>/packages/$1/src"
	},
	testRegex: ".*spec.ts$",
	moduleFileExtensions: [
		"ts",
		"js",
		"json"
	],
	transformIgnorePatterns: [
		"/node_modules/",
		"/dist/",
	],
	modulePathIgnorePatterns: [
		"/dist/",
		"/node_modules/"
	],
	projects: [
		"<rootDir>",
		"<rootDir>/packages/*"
	],
	collectCoverageFrom: [
		"packages/*/src/**/*.ts",
	],
	coveragePathIgnorePatterns: [
		".*(spec|const|config|mock|module|public-api|index|mock|model).ts"
	],
	mapCoverage: true,
	coverageReporters: [
		"lcovonly",
		"html"
	]
};
module.exports = {
	lib: {
		entryFile: "src/public-api.ts",
		umdModuleIds: {
			// vendors
			"tslib": "tslib",
			"lodash": "_",

			// local
			"@speedy/package-1": "speedy.package-1",
			"@speedy/package-1/testing": "speedy.package-1.testing",
		}
	}
}
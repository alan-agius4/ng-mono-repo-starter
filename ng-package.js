module.exports = {
	lib: {
		entryFile: "public-api.ts",
		cssUrl: "inline",
		comments: "none",
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

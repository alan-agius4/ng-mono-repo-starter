module.exports = {
	deleteDestPath: !process.env.WATCH_MODE,
	lib: {
		entryFile: "public-api.ts",
		cssUrl: "inline",
		umdModuleIds: {
			// vendors
			"tslib": "tslib",
			"lodash": "_",

			// local
			"@speedy/package-1": "speedy.package-1",
			"@speedy/package-1/testing": "speedy.package-1.testing",
		}
	},
	whitelistedNonPeerDependencies: ["."]
}

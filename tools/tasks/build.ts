import { ngPackagr } from "ng-packagr";
import { relative } from "path";
import { Bundler } from "scss-bundle";
import { writeFile } from "fs-extra";

/** Bundles all SCSS files into a single file */
async function bundleScss() {
	console.info("Bundling SCSS");

	const { found, bundledContent, imports } = await new Bundler()
		.Bundle("./src/_theme.scss", ["./src/**/*.scss"]);

	if (imports) {
		const cwd = process.cwd();

		const filesNotFound = imports
			.filter(x => !x.found)
			.map(x => relative(cwd, x.filePath));

		if (filesNotFound.length) {
			console.error(`SCSS imports failed \n\n${filesNotFound.join("\n - ")}\n`);
			throw new Error("One or more SCSS imports failed");
		}
	}

	if (found) {
		await writeFile("./dist/_theme.scss", bundledContent);
	}
}

ngPackagr()
	.forProject("./ng-package.js")
	.withTsConfig("../../tsconfig.build.json")
	.build()
	.then(bundleScss)
	.catch(() => process.exitCode = 1);
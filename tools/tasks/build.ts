const ngc = require("ng-packagr/lib/steps/ngc");
import { build, BuildStep } from "ng-packagr";
import { relative } from "path";
import { readConfiguration } from "@angular/compiler-cli";
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

// this patch is required because of
// https://github.com/dherges/ng-packagr/issues/473
const originalPrepareTsConfig = ngc.prepareTsConfig;
const prepareTsConfigPatched: BuildStep = ({ artefacts, entryPoint, pkg }) => {
	originalPrepareTsConfig({ artefacts, entryPoint, pkg });

	const { options } = readConfiguration("../../tsconfig.json");

	artefacts.tsConfig.options = {
		...artefacts.tsConfig.options,
		...options,
		baseUrl: "."
	};
};

ngc.prepareTsConfig = prepareTsConfigPatched;

build({ project: "ng-package.js" })!
	.then(bundleScss)
	.catch(() => process.exitCode = 1);
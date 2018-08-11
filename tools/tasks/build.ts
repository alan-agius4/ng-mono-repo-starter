import { ngPackagr } from "ng-packagr";
import { relative } from "path";
import { NEVER } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { Bundler } from "scss-bundle";
import { writeFile } from "fs-extra";

export const isWatchMode = !!process.env.WATCH_MODE;

/** Bundles all SCSS files into a single file */
async function bundleScss() {
	console.info("Starting Bundling SCSS");

	const { found, bundledContent, imports } = await new Bundler()
		.Bundle("./src/_theming.scss", ["./src/**/*.scss"]);

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
		await writeFile("./dist/_theming.scss", bundledContent);
	}

	console.info("Finished Bundling SCSS");
}

ngPackagr()
	.forProject("./ng-package.js")
	.withTsConfig("../../tsconfig.build.json")
	.withOptions({
		watch: isWatchMode
	})
	.buildAsObservable()
	.pipe(
		switchMap(bundleScss),
		catchError(() => {
			if (!isWatchMode) {
				process.exitCode = 1;
			}
			return NEVER;
		})
	)
	.subscribe();


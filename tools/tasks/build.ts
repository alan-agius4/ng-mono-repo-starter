const ngc = require("ng-packagr/lib/steps/ngc");
import { build, BuildStep } from "ng-packagr";

// this patch is required because of
// https://github.com/dherges/ng-packagr/issues/473

const originalPrepareTsConfig = ngc.prepareTsConfig;
const prepareTsConfigPatched: BuildStep = ({ artefacts, entryPoint, pkg }) => {
	originalPrepareTsConfig({ artefacts, entryPoint, pkg });
	const { options } = artefacts.tsConfig;
	options.strictNullChecks = true;
	options.noUnusedLocals = true;
	options.noUnusedParameters = true;
	options.baseUrl = ".";
	options.paths = {
		"*": [
			"node_modules/*"
		]
	};
};

ngc.prepareTsConfig = prepareTsConfigPatched;

build({ project: "ng-package.js" })!.catch(() => process.exitCode = 1);
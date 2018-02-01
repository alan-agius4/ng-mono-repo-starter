import { TestBed } from "@angular/core/testing";
import { Package1TestingModule } from "@speedy/package-1/testing";

import { SkeletonService } from "./skeleton.service";

describe("SkeletonService", () => {

	let skeletonService: SkeletonService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				Package1TestingModule,
				SkeletonService
			]
		});

		skeletonService = TestBed.get(SkeletonService);

		spyOn(console, "log");
	});

	it("should log successfully", () => {
		const message = "Hello";
		skeletonService.log2("log", message);
		expect(console.log).toHaveBeenCalledWith(message);
	});
});
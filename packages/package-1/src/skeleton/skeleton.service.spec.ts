import { TestBed } from "@angular/core/testing";

import { SkeletonService } from "./skeleton.service";

describe("SkeletonService", () => {

	let skeletonService: SkeletonService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SkeletonService
			]
		});

		skeletonService = TestBed.get(SkeletonService);
		spyOn(console, "log");
	});

	it("should log successfully", () => {
		const message = "Hello";
		skeletonService.log("log", message);
		expect(console.log).toHaveBeenCalledWith(message);
	});
});
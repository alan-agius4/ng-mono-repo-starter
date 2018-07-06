import { async, TestBed } from "@angular/core/testing";

import { SkeletonComponent } from "./skeleton.component";

describe("SkeletonComponentSpecs", () => {

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				SkeletonComponent
			]
		}).compileComponents();
	}));
	describe("given component is initialized", () => {
		let element: HTMLHeadingElement;

		beforeEach(() => {
			const fixture = TestBed.createComponent(SkeletonComponent);
			fixture.detectChanges();

			element = fixture.debugElement.nativeElement.querySelector("h1") as HTMLHeadingElement;
		});

		test("should have the text set", async(() => {
			expect(element.textContent).toMatch("Sample");
		}));
	});
});

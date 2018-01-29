import { Component } from "@angular/core";
import { async, TestBed } from "@angular/core/testing";

import { SkeletonComponent } from "./skeleton.component";

@Component({
	template: `<obg-skeleton></obg-skeleton>`
})
export class TestComponent {

}

beforeEach(() => {
	TestBed.configureTestingModule({
		declarations: [
			TestComponent,
			SkeletonComponent
		]
	});
});

describe("SkeletonComponentSpecs", () => {

	beforeEach(async(() => {
		TestBed.compileComponents();
	}));

	describe("given component is initialized", () => {
		let element: HTMLHeadingElement;

		beforeEach(() => {
			const fixture = TestBed.createComponent(TestComponent);
			fixture.detectChanges();

			element = fixture.debugElement.nativeElement.querySelector("h1") as HTMLHeadingElement;
		});

		it("should have the text set", async(() => {
			expect(element.textContent).toMatch("Sample");
		}));

		it("should have the proper css class", async(() => {
			expect(element).toHaveClass("big-title");
		}));
	});
});
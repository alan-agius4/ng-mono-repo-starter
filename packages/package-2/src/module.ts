import { NgModule } from "@angular/core";
import { Package1Module } from "@speedy/package-1";
import { Package1TestingModule } from "@speedy/package-1/testing";
import { SkeletonService } from "./skeleton/skeleton.service";

@NgModule({
	imports: [
		Package1TestingModule,
		Package1Module
	],
	providers: [
		SkeletonService
	]
})
export class Package2Module {

}
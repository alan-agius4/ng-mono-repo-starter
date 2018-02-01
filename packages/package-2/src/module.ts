import { NgModule } from "@angular/core";
import { Package1Module } from "@speedy/package-1";
import { SkeletonService } from "./skeleton/skeleton.service";

@NgModule({
	imports: [
		Package1Module
	],
	providers: [
		SkeletonService
	]
})
export class Package2Module {

}
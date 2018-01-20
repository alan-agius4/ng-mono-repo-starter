import { Injectable } from "@angular/core";

@Injectable()
export class SkeletonService {

	log(logType: string, message: string, data?: any) {
		if (data) {
			return (console as any)[logType](message, data);
		}

		(console as any)[logType](message);
	}

}

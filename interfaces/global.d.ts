// Context
export declare module "@nuxt/types" {
	interface Context {
		$dataApi: frontpageQueryData;
		error: any;
	}
}
export declare interface IGraphQlClient {
	readonly request: Function;
}

export declare interface IImage {
	readonly description?: string;
	readonly title?: string;
	readonly url?: string;
}

//////// global data
declare interface IFooter {
	readonly empowerMind?: IImage;
	readonly empowerMindText?: string;
	readonly adresse?: string;
	readonly email?: string;
	readonly phonenumber?: string;
	readonly zipcodeAndCity?: string;
	readonly facebook?: string;
	readonly instagram?: string;
	readonly linkedIn?: string;
	readonly youTube?: string;
	readonly footerText?: object;
}
declare interface IFooterObject{
	readonly footerObject?: IFooter;
}
declare interface IMenuItems {
	readonly slug?: string;
	readonly __typename?: string;
}
declare interface IMenu{
	readonly mainMenuCollection?: Array<IMenuItems>;
	readonly logo?: IImage;
}

export declare interface IHero {
	readonly pageHeadline?: object;
	readonly bodytext?: object;
	readonly image?: IImage;
	readonly subtitle?: string;
}
//////// blocks
declare interface IImageBlock {
	readonly imagesCollection?: Array<IImage>;
	readonly fullscreen?: boolean;
}
declare interface ITextBlock {
	readonly bodytext?: object;
}
declare interface IImageTextBlock {
	readonly label?: string;
	readonly bodytext?: object;
	readonly image?: IImage;
}
declare interface ICoachingBlock {
	readonly title?: string;
	readonly subtitle?: string;
}
///////// components
declare interface IProcessItem {
	readonly headline?: string;
	readonly bodytext?: object;
	readonly image?: IImage;
}
declare interface IProcess {
	readonly coachingProcessCollection?: Array<IProcessItem>;
	readonly coachingProcessTitle?: object;
}
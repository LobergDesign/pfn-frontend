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

export declare interface IHero {
	readonly pageHeadline?: object;
	readonly bodytext?: object;
	readonly image?: IImage;
	readonly subtitle?: string;
}
//////// blocks
declare interface IImageBlock{
	readonly imagesCollection?: Array<IImage>;
	readonly fullscreen?: boolean;

}
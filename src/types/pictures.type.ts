export type pictureType = {
	author: authorType;

	authrId: number;
	created: string;
	id: number;
	imageUrl: string;
	locationId: number;
	location: locationType;
	name: string;
};

export type authorType = {
	id: number;
	name: string;
};

export type locationType = {
	id: number;
	location: string;
};

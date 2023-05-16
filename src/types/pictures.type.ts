export type picture = {
  author: author;

  authrId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  location: location;
  name: string;
};

export type author = {
  id: number;
  name: string;
};

export type location = {
  id: number;
  location: string;
};

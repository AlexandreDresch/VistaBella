declare type RealEstate = {
  id: number;
  title: string;
  price: number;
  location: string;
  images: string[];
  size: number;
  type: "sell" | "rent";
  propertyType: "apartment" | "house" | "farm" | "flat" | "loft";
  briefDescription: string[];
  amenities: string[];
  layoutDetails: string[];
  furnitureDetails: string[];
  locationDetails: string;
  propertyOpinion: string;
  map: {
    lat: number;
    lng: number;
  };
};

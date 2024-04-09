import { CommonName } from "./CommonName";

export type Fish = {
  id?: string;
  scientific_name: string;
  native: boolean;
  image: string;
  gears: string[];
  common_name: CommonName[];
}
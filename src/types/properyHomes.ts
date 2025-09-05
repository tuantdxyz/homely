export type PropertyHomes = {
  name: string
  slug: string
  location: string
  rate: string
  beds: number
  baths: number
  area: number
  descriptions: {
    label1: string;
    label2: string;
    label3: string;
    label4: string;
  }
  images: PropertyImage[]
}

interface PropertyImage {
  src: string;
}

export interface IProductImageData {
    src: string;
}

export interface IProductCharacteristicsData {
    [characteristic: string]: string | number;
}

export default interface IProduct {
    id: string;
    name: string;
    price: number;
    package?: number;
    story: string;
    images: IProductImageData[];
    characteristics: IProductCharacteristicsData[];
}
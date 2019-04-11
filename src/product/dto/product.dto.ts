export class ProductDto {
    readonly name: string;
    readonly description: string;
    readonly imageUrl: string;
    readonly price: number;
    readonly new: boolean;
    readonly createdAt: Date;
}

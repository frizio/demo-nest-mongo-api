import { ProductDto } from './dto/product.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductService {

    constructor(
        @InjectModel('Product')
        private readonly productModel: Model<Product>,
    ) {}

    async getProducts(): Promise<Product[]> {
        const products = await this.productModel.find();
        return products;
    }

    async getProduct(productId: string): Promise<Product> {
        const product = await this.productModel.findById(productId);
        return product;
    }

    async createProduct(productDto: ProductDto): Promise<Product> {
        const newProduct = new this.productModel(productDto);
        return await newProduct.save();
    }

    async deleteProduct(productId: string): Promise<Product> {
        const deletedProduct = await this.productModel.findByIdAndDelete(productId);
        return deletedProduct;
    }

    async updateProduct(productId: string, productDto: ProductDto): Promise<Product> {
        const updatedProduct = await this.productModel.findByIdAndUpdate(productId, productDto, {new: true});
        return updatedProduct;
    }

}

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

    getProducts() {}

    getProduct() {}

    createProduct() {}

    deleteProduct() {}

    updateProduct() {}

}

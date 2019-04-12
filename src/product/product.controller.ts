import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';
import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';
import { Response } from 'express';

@Controller('product')
export class ProductController {

    constructor(
        private productService: ProductService,
    ) {}

    @Post('/create')
    async createProduct(@Body() productDto: ProductDto, @Res() res: Response) {
        const newProduct = await this.productService.createProduct(productDto);
        res.status(HttpStatus.OK).json(
            {
                message: 'Product Successful created',
                product: newProduct,
            },
        );
    }

}

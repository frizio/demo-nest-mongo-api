import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';
import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';
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

    @Get('/')
    async getProducts(@Res() res: Response ) {
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json( {products} );
    }

    @Get('/:productId')
    async getProduct(@Param('productId') productId, @Res() res: Response) {
        const product = await this.productService.getProduct(productId);
        if (!product) {
            throw new NotFoundException('The product does not exists');
        }
        return res.status(HttpStatus.OK).json( {product} );
    }

}

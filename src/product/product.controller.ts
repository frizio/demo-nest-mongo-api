import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';
import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
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
        return res.status(HttpStatus.OK).json( products );
    }

    @Get('/:productId')
    async getProduct(@Param('productId') productId: string, @Res() res: Response) {
        const product = await this.productService.getProduct(productId);
        if (!product) {
            throw new NotFoundException('The product does not exists');
        }
        return res.status(HttpStatus.OK).json( product );
    }

    @Delete('/delete')
    async deleteProduct(@Query('productId') productId, @Res() res: Response) {
        const deletedProduct = await this.productService.deleteProduct(productId);
        if (!deletedProduct) {
            throw new NotFoundException('The product does not exists');
        }
        res.status(HttpStatus.OK).json(
            {
                message: 'Product Deleted Successfully',
                product: deletedProduct,
            },
        );
    }

    @Put('/update')
    async updateProduct(@Query('productId') productId, @Body() productDto: ProductDto, @Res() res: Response) {
        const updatedProduct = await this.productService.updateProduct(productId, productDto);
        if (!updatedProduct) {
            throw new NotFoundException('The product does not exists');
        }
        res.status(HttpStatus.OK).json(
            {
                message: 'Product Updated Successfully',
                product: updatedProduct,
            },
        );
    }

}

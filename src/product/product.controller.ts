import { ProductDto } from './dto/product.dto';
import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';
import { Response } from 'express';

@Controller('product')
export class ProductController {

    @Post('/create')
    createPost(@Body() product: ProductDto,  @Res() res: Response) {
        // console.log(product);
        res.status(HttpStatus.OK).json(
            { message: 'received' },
        );
    }

}

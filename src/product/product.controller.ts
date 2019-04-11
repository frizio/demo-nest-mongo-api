import { Controller, Get, Post, Put, Delete, Res, HttpStatus } from '@nestjs/common';
import { resolve } from 'path';

@Controller('product')
export class ProductController {

    @Post('/create')
    createPost(@Res() res) {
        res.status(HttpStatus.OK).json(
            {
                message: 'received',
            }
        );
    }

}

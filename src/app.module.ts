import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

// const MONGO_URL = 'mongodb://user:password@localhost:27017/test';
const MONGO_URL = 'mongodb+srv://frizio:p455w0rdq@friziodemocluster-oq16p.gcp.mongodb.net/test?retryWrites=true';


@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(
      MONGO_URL,
      {useNewUrlParser: true},
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

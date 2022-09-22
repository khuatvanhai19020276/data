import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './controllers/book.controller';
import { Book, BookSchema } from './schemas/book.schema';
import { BookService } from './services/book.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/demo'),
            MongooseModule.forFeature([{name: Book.name, schema: BookSchema}])],
  controllers: [AppController, BookController],
  providers: [AppService, BookService],
})
export class AppModule {}
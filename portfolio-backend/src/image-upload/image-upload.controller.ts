import {
    Controller,
    Post,
    UseInterceptors,
    UploadedFile,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { ImageUploadService } from './image-upload.service';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { BufferedFile } from 'src/minio-client/file.model';
import { UploadImageDto } from 'src/minio-client/upload-image.dto';


  @ApiTags('Image Upload')
  @Controller('image-upload')
  export class ImageUploadController {
    constructor(private imageUploadService: ImageUploadService) {}
  
    
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    @ApiConsumes('multipart/form-data')
    @ApiBody({ type: UploadImageDto })
    async uploadImage(@UploadedFile() image: BufferedFile) {
      return await this.imageUploadService.uploadImage(image);
    }

  
  }
import { Injectable } from "@nestjs/common";
import { BufferedFile } from "src/minio-client/file.model";
import { MinioClientService } from "src/minio-client/minio-client.service";



@Injectable()
export class ImageUploadService {
    constructor(private minioClientService: MinioClientService){}

    async uploadImage(file: BufferedFile){
        const uploadedImage = await this.minioClientService.upload(file)

        return {
            image_url: uploadedImage.url,
            message: 'Image uploaded succesfully'
        }
    }

    async deleteImage(filename: string, bucketName: string){
        await this.minioClientService.delete(filename, bucketName)
    }

    async deleteImageByUrl(url:string){
        const filename = url.split('/').pop()
        await this.deleteImage(filename, 'test-bucket')
    }
}
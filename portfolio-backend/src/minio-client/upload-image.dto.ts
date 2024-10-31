import { ApiProperty } from "@nestjs/swagger";
import { BufferedFile } from "./file.model";

export class UploadImageDto {
    @ApiProperty({ type: 'string', format: 'binary' })
    image: BufferedFile;
  }
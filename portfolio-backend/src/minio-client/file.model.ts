import { ApiProperty } from "@nestjs/swagger";

export class BufferedFile {
  @ApiProperty({ description: 'Field name in the form data', example: 'image' })
  fieldname: string;

  @ApiProperty({ description: 'Original file name', example: 'photo.jpeg' })
  originalname: string;

  @ApiProperty({ description: 'File encoding type', example: '7bit' })
  encoding: string;

  @ApiProperty({ description: 'File MIME type', enum: ['image/png', 'image/jpeg'] })
  mimetype: AppMimeType;

  @ApiProperty({ description: 'File size in bytes', example: 1024 })
  size: number;

  @ApiProperty({ description: 'File content as buffer or base64 string', type: 'string', format: 'binary' })
  buffer: Buffer | string;
}

export interface StoredFile extends HasFile, StoredFileMetadata {}

export interface HasFile {
  file: Buffer | string;
}

export interface StoredFileMetadata {
  id: string;
  name: string;
  encoding: string;
  mimetype: AppMimeType;
  size: number;
  updatedAt: Date;
  fileSrc?: string;
}

export type AppMimeType = 'image/png' | 'image/jpeg';
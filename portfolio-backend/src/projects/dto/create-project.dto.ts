import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsOptional, IsString, IsUrl, MaxLength } from "class-validator";

export class CreateProjectDto {
    @ApiProperty({example: 'Project title.'})
    @IsString()
    title: string

    
    @ApiProperty({example: 'Description for project',
        required: false
    })
    @IsOptional()
    @IsString()
    @MaxLength(200)
    description?: string;
  

    @ApiProperty({example: 'https://imgur.com/gallery/pepper-checking-out-her-new-home-BdGyVY5'})
    @IsString()
    imageUrl: string;
  

    @ApiProperty({example: 'https://portfolio-liard-two-36.vercel.app/', required: true})
    @IsUrl({}, { message: 'Please insert valid url.' })
    projectLink: string;
  

    @ApiProperty({ example: true, required: false })
    @IsOptional()
    @IsBoolean()
    isVisible?: boolean;
}

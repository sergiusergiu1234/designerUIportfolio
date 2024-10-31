import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { JwtAuthGuard } from 'src/jwt-auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { ImageUploadService } from 'src/image-upload/image-upload.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService,
            private readonly imageUploadService: ImageUploadService
  ) {}


 
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  findAll() {
    return this.projectsService.findAll();
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(+id);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(+id, updateProjectDto);
  }

  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const project = await this.projectsService.findOne(+id);
    if(project.imageUrl){
      await this.imageUploadService.deleteImageByUrl(project.imageUrl).catch(err=>{
        throw new HttpException('Failed to delete image', HttpStatus.INTERNAL_SERVER_ERROR)
      })
    }
    const res = this.projectsService.remove(+id);

  }
}

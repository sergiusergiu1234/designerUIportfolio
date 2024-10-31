import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectsRepository: Repository<Project>
  ){}
  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const project = await this.projectsRepository.create(createProjectDto)
    return this.projectsRepository.save(project);
  }

  findAll(): Promise<Project[]> {
    const projects = this.projectsRepository.find()
    return projects
  }

  async findOne(id: number) {
    const project = await this.projectsRepository.findOne({ where: { id }})
    if (!project){
      throw new NotFoundException(`Project with id ${id} was not found in the database`)
    }
    return project
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    await this.projectsRepository.update(id, updateProjectDto);
    return this.findOne(id);
  }

  async remove(id: number) {

    const res = await this.projectsRepository.delete(id)
    if (res.affected === 0){
      throw new NotFoundException(`Project with id ${id} was not deleted. Not found.`);
    }
    return res
  }
}

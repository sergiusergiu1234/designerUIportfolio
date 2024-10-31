import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title:string

    @Column('text', {nullable: true,})
    description?: string;

    @Column()
    imageUrl: string;
  
    @Column({ nullable: true })
    projectLink?: string;
  
    @Column({ default: true })
    isVisible: boolean;
}

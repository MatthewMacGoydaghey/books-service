import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class User {
@ApiProperty()
@PrimaryGeneratedColumn()
id: number

@ApiProperty()
@Column()
username: string

@ApiProperty()
@Column()
password: string

@ApiProperty()
@Column()
email: string

@ApiProperty()
@Column()
role: string
}
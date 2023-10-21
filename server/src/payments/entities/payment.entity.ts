import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Payment {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	campaignId: string;

	@Column()
	userId: string;

	@Column()
	amount: number;
}

import { Table, Column, Model, DataType, ForeignKey, BelongsTo, BelongsToMany } from "sequelize-typescript";
import Client from "./client.model";
// import Team from './team.model';

@Table({
  tableName: "projects",
  timestamps: true,
})
class Project extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  project_id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description!: string;

  @ForeignKey(() => Client)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  client_id!: number;

  @Column({
    type: DataType.ENUM('negotiation', 'in_progress', 'completed'),
    allowNull: false,
  })
  status!: 'negotiation' | 'in_progress' | 'completed';

  @Column({
    type: DataType.DECIMAL(15, 2),
    allowNull: false,
  })
  budget!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  start_date!: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  end_date!: Date;

  @BelongsTo(() => Client)
  client!: Client;

  // @BelongsTo(() => Team)
  // team!: Team;
}

export default Project;
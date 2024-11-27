import { Table, Column, Model, DataType, BelongsToMany } from "sequelize-typescript";
import Employee from './employee.model';
import EmployeeTeam from './employee_team.model';
import Project from './project.model';
import TeamProject from './team_project.model';

@Table({
  tableName: "teams",
  timestamps: true,
})
class Team extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  team_id!: number;

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

  @BelongsToMany(() => Employee, () => EmployeeTeam)
  employees!: Employee[];

  @BelongsToMany(() => Project, () => TeamProject)
  projects!: Project[];
}

export default Team;
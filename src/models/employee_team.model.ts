import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import Employee from "./employee.model";
import Team from './team.model';

@Table({
  tableName: "employee_team",
  timestamps: true,
})
class EmployeeTeam extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  employee_team_id!: number;

  @ForeignKey(() => Employee)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  employee_id!: number;

  @ForeignKey(() => Team)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  team_id!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  joined_at!: Date;
}

export default EmployeeTeam;
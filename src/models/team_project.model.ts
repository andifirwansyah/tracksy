import {
    Table,
    Column,
    Model,
    ForeignKey,
    DataType,
  } from "sequelize-typescript";
  import Team from "./team.model";
  import Project from "./project.model";
  
  @Table({
    tableName: "team_project",
    timestamps: false,
  })
  class TeamProject extends Model {
    @ForeignKey(() => Team)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    team_id!: number;
  
    @ForeignKey(() => Project)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    project_id!: number;
  
    @Column({
      type: DataType.DATE,
      allowNull: false,
      defaultValue: DataType.NOW,
    })
    assigned_at!: Date;
  }
  
  export default TeamProject;
  
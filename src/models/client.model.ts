import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "clients",
  timestamps: true,
})
class Client extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  client_id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  company!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  address!: string;
}

export default Client
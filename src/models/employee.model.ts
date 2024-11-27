import {Table, Column, Model, DataType, BelongsToMany} from 'sequelize-typescript';
import Team from "./team.model";
import EmployeeTeam from "./employee_team.model";

@Table({
    tableName: 'employees',
    timestamps: true,
})

class Employee extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
    })
    employee_id!: number;

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
        allowNull: true,
    })
    position!: string;

    @Column({
        type: DataType.DECIMAL(15, 2),
        allowNull: true,
    })
    hourly_rate!: number;

    @Column({
        type: DataType.ENUM('available', 'unavailable'),
        allowNull: true,
    })
    availability!: 'available' | 'unavailable';

    @BelongsToMany(() => Team, () => EmployeeTeam)
    teams!: Team[];
}

export default Employee
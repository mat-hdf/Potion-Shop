import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/dbconfig.js'

class Potion extends Model {}

Potion.init(
    {
        id:
        {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img:
        {
            type:DataTypes.STRING,
            allowNull: false
        },
        price:
        {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    },
    {
        sequelize: sequelize,
        timestamps:false
    }
)

export default Potion;
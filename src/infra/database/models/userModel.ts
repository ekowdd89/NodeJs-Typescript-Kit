import { Optional, DataTypes, Model } from "sequelize"
import sequelize from "../index"

interface UserAttirbutes {
    id?:string
    name: string
    email: string
    password: string
    created_at?: Date
    updated_at?: Date
}





interface UserCreateAttibutes extends Optional<UserAttirbutes, 'id'> { }

class User extends Model<UserAttirbutes, UserCreateAttibutes> implements UserAttirbutes {
    public id!: string;
    public name!: string;
    public email!: string;
    public password!: string;
    public created_at!: Date;
    public updated_at!: Date;
}


User.init(
    {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        }
    },
    {
        sequelize,
        tableName:'sys_ms_users',
        modelName: 'User',
        timestamps: false
    }
)

export default User
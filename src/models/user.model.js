const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    const User = sequelize.define(
        "User", 
        {
            idUser: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            email: {
                type: DataTypes.STRING(100),
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: {
                      msg: "L'email doit être valide",
                    },
                  },
            },
            password: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
})
    return User;
};
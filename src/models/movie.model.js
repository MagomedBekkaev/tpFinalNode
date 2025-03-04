const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    const Movie = sequelize.define(
        "Movie", 
        {
            idMovie: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            realeaseDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            imageUrl: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },

})
    return Movie;
};
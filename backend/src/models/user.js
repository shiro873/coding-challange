module.exports = (sequelize, Sequelize, DataTypes) => {
    const User = sequelize.define(
        "user",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            categories: {
                type: DataTypes.JSON
            }
        },
        {
            // Options
            timestamps: true,
            underscrored: false,
            createdAt: "createdAt",
            updatedAt: "updatedAt",
        }
    );

    return User;
}
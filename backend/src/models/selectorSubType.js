module.exports = (sequelize, Sequelize, DataTypes) => {
    const SelectorSubType = sequelize.define(
        "selectorSubType",
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
        },
        {
            // Options
            timestamps: true,
            underscrored: false,
            createdAt: "createdAt",
            updatedAt: "updatedAt",
        }
    );

    return SelectorSubType;
}
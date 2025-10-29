module.exports = (sequelize, DataTypes) => {
    const Komik = sequelize.define("Komik", {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        judul : {
            type : DataTypes.STRING,
            allownull : false
        },
        penulis : {
            type : DataTypes.STRING,
            allownull : false
        },
        deskripsi : {
            type : DataTypes.TEXT,
            allownull : false
        }
    }, {
        tableName : "Komik",
        freezeTableName : true,
        timestamps : true
    });
    return Komik;
}
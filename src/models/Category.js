const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('Category', {
    // definir todas as colunas do banco de dados
    // juntamente com todas as constraints
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    }, 
    name: {
      allowNull: false,
      type: DataTypes.STRING
    }
  },
  {
    tableName: 'categoryes',
    underscored: true,
    timestamps: false
  });

  return CategoryTable;
}

module.exports = CategorySchema;
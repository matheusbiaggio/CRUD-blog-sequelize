const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    // definir todas as colunas do banco de dados
    // juntamente com todas as constraints
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    }, 
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },
  {
    tableName: 'users',
    underscored: true,
    timestamps: false
  });

  return UserTable;
}

module.exports = UserSchema;
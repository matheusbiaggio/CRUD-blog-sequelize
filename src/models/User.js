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
    displayName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    image: DataTypes.STRING
  },
  {
    tableName: 'users',
    underscored: true,
    timestamps: false
  });

  UserTable.associate = (model) => {
    UserTable.hasMany(model.BlogPost, {
      foreignKey: 'userId',
      as: 'posts'
    })
  }

  return UserTable;
}

module.exports = UserSchema;
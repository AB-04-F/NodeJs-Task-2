const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_id', {
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    user_email: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    user_password: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    user_image: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    total_orders: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    last_logged_in: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('current_timestamp')
    }
  }, {
    sequelize,
    tableName: 'tbl_id',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};

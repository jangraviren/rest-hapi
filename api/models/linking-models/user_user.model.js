/**
 * Created by Justin on 10/29/16.
 */
var mongoose = require("mongoose");

module.exports = function () {

  var Types = mongoose.Schema.Types;

  var Model = {
    Schema: {
      friendsSince: {
        type: Types.Date,
        allowNull: false
      }
    },
    modelName: "user_user"
  };

  return Model;
};

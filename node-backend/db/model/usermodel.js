const userSchema = {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  };
  
  module.exports = userSchema;
  
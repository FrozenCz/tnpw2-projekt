import * as mongoose from 'mongoose'

export const UsersSchema = new mongoose.Schema({
  email: {type: String, trim:true},
  passwordHash: String,
  token: String
},
  {versionKey: false}
);

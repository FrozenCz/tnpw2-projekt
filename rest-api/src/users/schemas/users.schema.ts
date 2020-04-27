import * as mongoose from 'mongoose'

export const UsersSchema = new mongoose.Schema({
  email: String,
  passwordHash: String,
  token: String
},
  {versionKey: false}
);

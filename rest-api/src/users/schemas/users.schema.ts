import * as mongoose from 'mongoose'

export const UsersSchema = new mongoose.Schema({
  email: String,
  passwordHash: String
},
  {versionKey: false}
);

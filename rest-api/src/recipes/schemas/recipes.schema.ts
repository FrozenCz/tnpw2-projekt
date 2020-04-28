import * as mongoose from 'mongoose'

export const RecipesSchema = new mongoose.Schema({
  name: {type: String, lowercase:true, trim:true},
  ingredients: [{name: {type: String, lowercase:true, trim: true}, amount: {type:Number}, amount_type:{type: String, trim: true}}],
  description: {type: String, trim:true},
  isPrivate: Boolean,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  date: Date,
  imagePath: {type: String, trim:true}
});


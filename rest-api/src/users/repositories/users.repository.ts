import {Injectable} from "@nestjs/common";
import {User} from "../../../../shared/user";
import { Model } from 'mongoose';
import {InjectModel} from "@nestjs/mongoose";

@Injectable()
export class UsersRepository{

  constructor(@InjectModel('User') private userModel: Model<User>) {

  }


  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async emailExists(email: string){
    return this.userModel.findOne({email});
  }

  async findOne(params): Promise<User>{
    return this.userModel.findOne(params).toObject();
  }

  async findUser(userId: string): Promise<User> {
    return this.userModel.findById(userId);
  }

  async addUser(email: string, password: string): Promise<User> {
    const newUser = this.userModel({email, passwordHash: password})
    await newUser.save();
    return newUser.toObject({versionKey: false})
  }

  async updateUser(userId: string, changes: Partial<User>): Promise<User> {
    return this.userModel.findOneAndUpdate({_id: userId}, changes, {new: true});
  }
}

import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.schema';


@Injectable()
export class UsersService {
    constructor (
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>
    ){

    }
    async findAll(): Promise<User[]>{
        const user = await this.userModel.find()
        return user;
    }


    async createdUser(user:User): Promise<User>{
        const res = await this.userModel.create(user)
        return res;
    }


   
}

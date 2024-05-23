import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/schemas/user.schema';


@Controller('users')

export class UsersController {
    constructor(private readonly userServ: UsersService){}

    @Get()
  async findAllusers(): Promise<User[]>{
        return this.userServ.findAll()
    }


    @Post()
    async createUser(@Body() user):Promise<User>  {

        return this.userServ.createdUser(user)
    }

  
    
}

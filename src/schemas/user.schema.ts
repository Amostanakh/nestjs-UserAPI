import {Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps:true
})

export class User{
    @Prop()
    name:string

    @Prop()
    email:string

    @Prop()
    class:string

    @Prop()
    age:number
}

export const UserSchema = SchemaFactory.createForClass(User)
"use server"

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose"
import { CreateUserParams, DeleteUserParams, UpdateUserParams } from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function getUserById(params:any){
    try {
        connectToDatabase();
        const {userId} = params;
         const user = await User.findOne({ clerkId: userId });
        return user;
    } catch (error) {
        console.log("User not found",error);
        throw error;
    }
}

export async function createUser(userData:CreateUserParams){
    try {
        connectToDatabase();
        const newUser = await User.create(userData);
        return newUser;
    } catch (error) {
        console.log("User not created",error);
        throw error;
    }
}

export async function updateUser(userData:UpdateUserParams){
    try {
        connectToDatabase();
        const {clerkId, updateData, path} = userData;
        await User.findOneAndUpdate({clerkId}, updateData, {new: true});
        revalidatePath(path);
        
    } catch (error) {
        console.log("User not created",error);
        throw error;
    }
}

export async function deleteUser(userData:DeleteUserParams){
    try {
        connectToDatabase();
        const {clerkId} = userData;
        const user = await User.findOneAndUpdate({clerkId}, updateData, {new: true});
        if(!user){
            throw new Error("User not found"); 
        }
        // Delete user from database
        // and questions, answers, comments etc.

        // Get user's question ids
        const  userQuestionIds = await Question.find({author:user._id}).distinct("_id");

        // Delete user's questions
        await Question.deleteMany({author:user._id});
        // TODO: delete user's answers, comments etc.

        const deletedUser = await User.findByIdAndDelete(user._id);
        return deletedUser;
        
    } catch (error) {
        console.log("User not created",error);
        throw error;
    }
}
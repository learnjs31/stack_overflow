"use server"

import Question from "@/database/question.model";
import { connectToDatabase } from "../mongoose"
import Tag from "@/database/tag.model";
import { CreateQuestionParams, GetQuestionsParams } from "./shared.types";
import { revalidatePath } from "next/cache";
import User from "@/database/user.model";


export async function getQuestions(params: GetQuestionsParams) {
  try {
    connectToDatabase();

    const questions = await Question.find({})
      .populate({ path: 'tags', model: Tag })
      .populate({ path: 'author', model: User })
      .sort({ createdAt: -1 })

    return { questions };
  } catch (error) {
    console.log(error)
    throw error;
  }
}
export async function createQuestion(params: CreateQuestionParams) {
    try {
        //Try block
        connectToDatabase();
        const {title, content, author, tags, path} = params;

        //Create new question
        const question = await Question.create({
            title,
            content,
            author
        });

        const tagDocuments = [];
        //Create new tag or get existing tags
        for (const tag of tags) {
            const existingTag = await Tag.findOneAndUpdate(
                {name: tag}, 
                {$push: {questions: question._id}}, 
                {upsert: true, new: true});

            tagDocuments.push(existingTag._id);
        }

        await Question.findByIdAndUpdate(question._id, {
            $push: {
                tags: {$each: tagDocuments}}
        });

        revalidatePath(path);
    } catch (error) {
        // Catch block
    }
}


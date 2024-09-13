import { Schema, models, model, Document } from "mongoose";


export interface IUser extends Document {
      clerkId: string;
      name: string;
      username: string;
      email: string;
      password?: string;
      bio?: string;
      picture: string;
      location?: string;
      portfolioWebsite?: string;
      reputation: number;
      saved: Schema.Types.ObjectId[];
      joinedAt: Date;
        
}

const UserSchema = new Schema({
   clerkId: {type: String, required: true},
   name: {type: String, required: true},
   username: {type: String, required: true, unique: true},
   email: {type: String, required: true, unique: true},
   password: {type: String}, //optional field
   bio: {type: String}, //optional field
   picture: {type: String, required: true},
   location: {type: String},//optional field
   portfolioWebsite: {type: String},//optional field
   reputation: {type: Number, default: 0,required: true},
   saved: [{type: Schema.Types.ObjectId, ref: "Question"}],
   joinedAt: {type: Date, default: Date.now, required: true},
}); 

const User = models.User || model("User", UserSchema);

export default User;
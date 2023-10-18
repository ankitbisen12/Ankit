const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema(
  {
    title:{type:String,required:true},
    intro:{type:String,required:true},
    shortdesc:{type:String,required:true},
    email:{type:String,required:true},
    degree:{type:String,required:true},
    city:{type:String,required:true},
    softSkill:{type:String,required:true},
    lang:{type:String,required:true}
  },
  {timestamps: true,}
);

mongoose.models={};
const About = mongoose.model("About",AboutSchema);

export default About;

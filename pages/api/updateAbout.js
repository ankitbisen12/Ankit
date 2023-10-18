import connectDB from "@/middleware/mongoose";
import About from "@/models/About";

const handler = async (req, res) => {
  if (req.method == 'POST') {
    const id = req.body._id;
    // console.log(id);
    const about = await About.findByIdAndUpdate(id,req.body,{
        new:true
    });
    res.status(200).json({
      status: "success",
      upadatedAbout: about,
    });
  } else {
    res.status(400).json({ status: "This method is not allowed" });
  }
};

export default connectDB(handler);
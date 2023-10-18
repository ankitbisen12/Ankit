import connectDB from "@/middleware/mongoose";
import Contact from "@/models/Contact";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const contact= await Contact.create(req.body);
    res.status(200).json({
      status: "success",
      data: contact,
    });
  } else {
    res.status(400).json({ status: "This method is not allowed" });
  }
};

export default connectDB(handler);
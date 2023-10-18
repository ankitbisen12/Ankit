import connectDB from "@/middleware/mongoose";
import Contact from "@/models/Contact";


const handler = async (req, res) => {
  let contact = await Contact.find({});
  res.status(200).json(contact);
};

export default connectDB(handler);
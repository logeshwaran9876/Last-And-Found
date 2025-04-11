

import Item from "../models/items.js"
const additem = async (req, res) => {
    try {
      const {
        title,
        description,
        imageURL,
        location,
        type,
        date,
        userId,
        qrCodeId,
        isMatched
      } = req.body;
  
     
      if (!title || !description || !location || !type || !userId) {
        return res.status(400).json({ message: "Please fill all the required fields" });
      }
  
    
      const newItem = await Item.create({
        title,
        description,
        imageURL: imageURL || "", 
        location,
        type,
        date: date || new Date(),
        userId,
        qrCodeId: qrCodeId || null, 
        isMatched: isMatched ?? false 
      });
  
      return res.status(201).json({ message: "Item added successfully", item: newItem });
  
    } catch (err) {
      console.error("❌ Error adding item:", err.message);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
export {additem};
// controllers/studentController.js
export const addStudent = async (req, res) => {
    try {
      const { name, age, grade } = req.body;
  
      // For now we’ll just send back what we got
      // (later we’ll connect this with MongoDB model)
      res.status(201).json({
        message: "Student added successfully!",
        data: { name, age, grade },
      });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong", error });
    }
  };
  
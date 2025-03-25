const CS = require("../model/CurdSchema");
exports.viewData = async (req, res) => {
  try {
    const data = await CS.find();
    res.status(200).json({
      status: "SuccessFull",
      message: "Data Found",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error: error.message,
    });
  }
};
exports.addData = async (req, res) => {
  try {
    const data = req.body;
    if (!data || Object.keys(data).length === 0) {
      return res.status(400).json({
        status: "Fail",
        message: "Request body is empty or invalid",
      });
    }
    const CreateData = await CS.Create(data);
    res.status(201).json({
      status: "Successfull",
      message: "Data Created Succesfully",
      data: CreateData,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error: error.message,
    });
  }
};

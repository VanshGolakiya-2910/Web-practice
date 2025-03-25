const UserModel = require("../model/userModel");
exports.UserPageRender = async (req, res) => {
  res.render("users");
};
exports.viewAllUsers = async (req, res) => {
  try {
    const data = await UserModel.find().lean();
    if (!data || data.length === 0) {
      return res.status(404).json({
        status: "Fail",
        message: "No Users Found",
      });
    }
    res.status(200).json({
      status: "Sucessfull",
      message: "Data Found",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.addUser = async (req, res) => {
  try {
    const data = req.body;

    if (!data || Object.keys(data).length === 0) {
      return res.status(400).json({
        status: "Fail",
        message: "Request body is empty",
      });
    }
    const createdData = await UserModel.create(data);
    res.status(201).json({
      status: "Successful",
      message: "Record Created ",
      data: createdData,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      error: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleteId = req.params.id;
    const deletedData = await UserModel.findByIdAndDelete(deleteId);
    if (!deletedData || Object.keys(deletedData).length === 0) {
      return res.status(404).json({
        status: "Fail",
        message: "Requested Data not Found",
      });
    }
    res.status(200).json({
      status: "Successful",
      message: "User deleted successfully",
      data: deletedData,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
exports.editUser = async (req, res) => {
  try {
    const updateID = req.params.id;
    const updateData = req.body;

    if (!updateID || !updatedData || Object.keys(updatedData).length === 0) {
      return res.status(400).json({
        status: "Fail",
        message: "Invalid request: Missing ID or update data",
      });
    }
    const updatedData = await UserModel.findByIdAndUpdate(
      updateID,
      updateData,
      { new: true }
    );
    if (!updatedData) {
      return res.status(404).json({
        status: "Fail",
        message: "User not found",
      });
    }
    res.status(200).json({
      status: "Successful",
      message: "User Record Updated Successfully",
      data: updatedData,
    });
  } catch (error) {
    res.status(500).json({
      status: "Fail",
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

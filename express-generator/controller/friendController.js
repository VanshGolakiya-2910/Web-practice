var FM = require('../model/friend')

exports.pageView = (req , res) => {
    res.render('friend')
}

exports.deleteData = async(req , res) => {
    const deleteId = req.params.id
    try {
        const data = await FM.findByIdAndDelete(deleteId)
        res.status(200).json({
            status : 'success',
            message : 'data delete',
            data : data
        })
    } catch (error) {
        res.status(404).json({
            status : 'fail',
            message : error.message
           
        })
    }
}

exports.addData = async (req, res) => {

    console.log('Check');
    
    try {
      const data = req.body;
      if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({
          status: "Fail",
          message: "Request body is empty or invalid",
        });
      }
      const CreateData = await FM.create(data);
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
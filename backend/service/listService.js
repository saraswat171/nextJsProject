const CustomError = require('../libs/error');

const listModel = require('../models/listSchema')

exports.addedtask = async (body) => {

  try {
    const task = body

    const response = await listModel.create({ task });
    console.log('response: ', response);

    return response;
  }
  catch (err) {

    throw err;
  }

}

exports.fetchedtask = async () => {
  try {

    const user = await listModel.find({});
    if (!user)
      throw new CustomError("data doesn't exist", 404);




    return user;

  }
  catch (err) {

    throw err;
  }
}

exports.updatedtask = async (params) => {
  try {
    const { id, data } = params;
    const newtask = data;

    const updatedData = await listModel.findByIdAndUpdate(id, { task: newtask }).exec();
    console.log('updatedData: ', updatedData);

    return updatedData;
  } catch (err) {
    throw err;
  }
}
exports.deletedtask = async (params) => {
  try {
    const id = params;

    console.log('uuid: ', id);

    const deletedData = await listModel.findByIdAndDelete(id);

    return deletedData;
  } catch (err) {
    throw err;
  }
}
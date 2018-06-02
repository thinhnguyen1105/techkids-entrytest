const userModel = require('./model');

  
const createUser = ({username,fullname,email,password,confirmpassword}) =>
  new Promise((resolve, reject) => {
    userModel
      .create({
        username,
        fullname,
        email,
        password,
        confirmpassword
      })
      .then(data => resolve({ id: data._id }))
      .catch(err => reject(err));
  });

  const updateUser = (id, {username,fullname,email,password}) =>
  new Promise((resolve, reject) => {
    userModel
      .update(
        {
          _id: id
        }
      )
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const getOneUser = id =>{
    return userModel
      .findOne({
        _id: id
      })
    };

    
  const getAllUser = page => new Promise((resolve, reject) => {
      userModel.find({
              'active': true
          })
          .sort({
              createAt: -1
          })
          .skip((page - 1) * 20)
          .limit(20)
          .select("username fullname password email")
          .exec()
          .then(data => resolve(data))
          .catch(err => reject(err))
  })
  
  const getUser = id => new Promise((resolve, reject) => {
      userModel.findOne({
              active: true,
              _id: id
          })
          .select("username fullname password email")
          .exec()
          .then(data => resolve(data))
          .catch(err => reject(err))
  })
  
  const updateUserName = (id, {
      username
  }) => new Promise((resolve, reject) => {
      userModel.update({
              _id: id
          }, {
              username
          })
          .then(data => resolve({
              id: data._id
          }))
          .catch(err => reject(err))
  })
  
  const updateUserEmail = (id, {
      email
  }) => new Promise((resolve, reject) => {
      userModel.update({
              _id: id
          }, {
              email
          })
          .then(data => resolve({
              id: data._id
          }))
          .catch(err => reject(err))
  })
  
  
  const updateUserPassword = (id, {
      password
  }) => new Promise((resolve, reject) => {
      userModel.update({
              _id: id
          }, {
              password
          })
          .then(data => resolve({
              id: data._id
          }))
          .catch(err => reject(err))
  })
  
  const deleteUser = id => new Promise((resolve, reject) => {
      userModel.update({
              _id: id
          }, {
              active: false
          })
          .then(data => resolve({
              id: data._id
          }))
          .catch(err => reject(err))
  })
  
  const getUserForAuth = username =>
      new Promise((resolve, reject) => {
          userModel
              .findOne({username})
              .select("username password _id")
              .exec()
              .then(user => resolve(user))
              .catch(err => reject(err));
  
      });
  
  module.exports = {
      createUser,
      getUser,
      getAllUser,
      updateUserEmail,
      updateUserName,
      updateUserPassword,
      deleteUser,
      getUserForAuth
  }
     
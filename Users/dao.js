import model from "./model.js";


export const findUserByUsername = (username) =>  model.findOne({ username: username });



export const findAllUsers = () => model.find();

export const findUserById = (userId) => model.findById(userId);

export const findUsersByRole = (role) => model.find({ role: role }); // or just model.find({ role })

export const findUsersByPartialName = (partialName) => {
    const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
    return model.find({
      $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
    });
  };
  
export const deleteUser = (userId) => model.deleteOne({ _id: userId });

export const updateUser = (userId, user) =>  model.updateOne({ _id: userId }, { $set: user });

export const createUser = (user) => {
    delete user._id // remove _id field just in case client sends it
    return model.create(user); // database will create _id for us instead
}

export const findUserByCredentials = (username, password) =>  model.findOne({ username, password });
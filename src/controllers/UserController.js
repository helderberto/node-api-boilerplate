const UserModel = require('../models/UserModel');

module.exports = {
  async index(req, res) {
    try {
      const users = await UserModel.getUsers();

      res.json(users);
    } catch (err) {
      res.status(404).send(err.message);
    }
  },

  async show(req, res) {
    const { id } = req.params;

    if (!id) {
      res.status(404).send('🚫 You must pass the ID param.');
    }

    try {
      const user = await UserModel.getUserById(id);

      res.json(user);
    } catch (err) {
      res.status(404).send(err.message);
    }
  },
};

const users = require('../data/users.json');
const findById = require('../utils/findById');

function getUsers() {
  return new Promise((resolve, reject) => {
    if (users.length === 0) {
      reject(new Error('🚫 No users found.'));
    }
    resolve(users);
  });
}

function getUserById(id) {
  return new Promise((resolve, reject) => {
    const user = findById(users, id);

    if (!user) {
      reject(new Error('🚫 No user found.'));
    }
    resolve(user);
  });
}

module.exports = {
  getUsers,
  getUserById,
};

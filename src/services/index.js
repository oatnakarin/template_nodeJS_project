const User = require('../models/User');

// Dummy database
let users = [
    new User('HN00001', 'Teerapat', 'K.','','9041'),
    new User('HN00002', 'Narinphat', 'S.','','9042'),
    new User('HN00003', 'Adisak', 'G.','','9043'),
    new User('HN00004', 'Mongkol', 'R.','','9044'),
    new User('HN00005', 'Jetsadakorn', 'F.','','9045'),
];

// Service methods
const getAllUsers = (id) => {
    let returnUser = users.find((item)=>item.HNpatient === id);
    return returnUser;
};

module.exports = {
    getAllUsers
};
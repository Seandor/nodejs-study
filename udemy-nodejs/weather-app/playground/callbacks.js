var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Vike'
    };
    callback(user);
};

getUser(21, (userObject) => {
    console.log(userObject);
});
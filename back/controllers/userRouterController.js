const { Model } = require("mongoose");

function userController(userDetail) {
  function get(req, res) {
    const query = {};
    if (req && req.query && req.query.sub) {
      query.sub = req.query.sub;
      userDetail.findOne(query, (error, user) => {
        if (error) {
          res.status(404);
          res.send("Not found");
        } else if (user) {
          res.status(200);
          res.json(user);
        } else {
          const newUser = new Model({
            email: query.email,
            email_verificated: query.email_verificated,
            family_name: query.family_name,
            given_name: query.given_name,
            picture: query.picture,
            sub: query.sub,
            department: query.department,
          });
          newUser.save();
          res.status(201);
          res.json(newUser);
        }
      });
    }
  }
  return { get };
}

module.exports = userController;

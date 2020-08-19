module.exports = function (app) {
  app.get("/user1/", function (req, res) {
    res.send("Hello from User!");
  });

  app.get("/user2/", function (req, res) {
    res.send("Hello from User 2!");
  });
};

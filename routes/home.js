module.exports = function (app) {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.get("/test1/", function (req, res) {
    res.send("Hello from Home!");
  });

  app.get("/test2/", function (req, res) {
    res.send("Hello from Home 2!");
  });
};

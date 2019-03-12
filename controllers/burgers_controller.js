var db = require("../models");

//Routes
module.exports = function(app) {
  
//GET route to redirect
// app.get("/", function(req, res) {
//   res.redirect("/api/all");
// });

//GET route to show all burgers
app.get('/', function(request, response){
  db.burgers.findAll({}).then(function(dbResponse) {
    response.render("index", { burgers: dbResponse });
  });
});

//PUT route for updating devoured value
app.put("/api/:id", function(req, res){
  db.burgers.update({ devoured: 1}, {
    where: {
      id: req.body.id
    }
  }).then(function(dbPost){
    res.redirect("/");
  });
});
};
module.exports = {

    index: function(req, res){
        res.render("default/index");
    },

    loginGet: function(req, res){
        res.send("1234");  
    },

    loginPost: function(req, res){
        res.send("Congratulation on submission");   
    }

};
const mongoose = require("mongoose");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();

mongoose.connect("mongodb+srv://admin-adesh:test-123@cluster0.7si5o.mongodb.net/<wikiDBDep>?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true});

const articleSchema = {
    title : String,
    content : String
};

let Article = mongoose.model("Article", articleSchema);

app.set("view engine", 'ejs');

app.use(bodyParser.urlencoded({
    extended : true
}));

app.use(express.static("public"));

app.get("/", function(req, res)
{
    res.render("index");
});

///////////////////////////////////// Routes Targeting all the articles ////////////////////////////////////////

app.route("/articles")

.get(function(req, res){
    Article.find({}, function(err, foundArticles){
        if(!err){
        res.send(foundArticles);
        }
        else{
            res.send(err);
        }
    });
})

.post(function(req, res){
   
    const newArticle = new Article({
        title : req.body.title,
        content : req.body.content
    });

    newArticle.save(function(err){
        if(!err){
            res.send("Successfully added the entry in database");
        }
        else{
            res.send(err);
        }
    })
})

.delete(function(req, res){
    Article.deleteMany({}, function(err){
        if(!err){
            res.send("Successfully deleted all the articles");
        }
        else{
            res.send(err);
        }
    });
});

//////////////////////////////////////////////////////// Routes targeting specific articles///////////////////////////////

app.route("/articles/:articleTitle")

.get(function(req, res){

    Article.findOne({title : req.params.articleTitle}, function(err, foundArticle){

        if(foundArticle){
            res.send(foundArticle);
        }
        else{
            res.send("No such articles in the database");
        }
    });
})

.put(function(req,res){

    Article.update(
        {title : req.params.articleTitle},
        { title : req.body.title, content : req.body.content},
        {overwrite : true},
        function(err){
            if(!err){
                res.send("Successfully Updated the article");
            }
        }
    )
})

.patch(function(req, res){

    Article.updateOne(
        {title : req.params.articleTitle},
        {$set : req.body},
        function(err){
            if(!err){
                res.send("Successfully updated the article");
            }
        }
    );
})

.delete(function(req, res){

    Article.deleteOne(
        {title : req.params.articleTitle},
        function(err){
            if(!err){
                res.send("Successfully deleted the article");
            }
            else{
                res.send(err);
            }
        }
    );
});

let port = process.env.PORT;

if(port == null || port == "")
{
    port = 3000;
}

app.listen(port, function(req, res){
    console.log("Server is up at PORT 3000");
})

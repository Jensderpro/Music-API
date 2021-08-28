const express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    port = 3000;


app.get("/", (req, res) => {
    res.send("Here");
});


mongoose
    .connect(
        "mongodb+srv://User01:xxv3meZoDFHTd1iK@cluster0.wgtof.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then((connection) => {
        console.log("Database is connected");
        app.listen(port, () => {
            console.log(`Server started on port: ${port}`);
        });
    })
    .catch((error) => {
        console.error(error);
    });


app.listen(port, () => {
    console.log(`Server started on port`);
});




    
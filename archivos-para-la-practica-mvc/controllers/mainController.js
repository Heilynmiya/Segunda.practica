const path = require ("path");

const controladores = {
    home: (req.res) =>{
        res.sendfile(path.join (__dirname, "../views/home.html"));
    },
    about: (req.res) =>{
        res.sendfile(path.join (__dirname, "../views/about.html"));
    };
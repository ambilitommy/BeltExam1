var express = require('express'),
    app = express(),
    path = require('path'),
    root = __dirname,
    bp = require('body-parser'),
    port = process.env.PORT || 8000;

app.use(express.static(path.join(root,'/client')));
app.use(express.static(path.join(root,'/bower_components')));
app.use(bp.urlencoded({extended:true}));
app.use(bp.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(port,function(){
  console.log("listening "+port);
})

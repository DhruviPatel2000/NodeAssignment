var mongoose = require('mongoose');
mongoose.connect(process.env.DBURL ,{ useNewUrlParser: true } );
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
module.exports=mongoose;
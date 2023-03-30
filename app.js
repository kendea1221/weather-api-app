//. app.js

const express = require( 'express' ),
      ejs = require( 'ejs' ),
      app = express();

//. ejs
app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );

//. Index
app.get('/', function( req , res ){
    res.render( 'index', {} );
});

//. MainDIR
app.use( express.static( __dirname + '/public' ) );

//. port
const port = process.env.PORT || 8800;
app.listen( port );

console.log( 'Server starting on ' + port + '...' )
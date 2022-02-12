const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        this.app = express();

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use( cors() );

        this.app.use( express.json() );
    }

    routes(){
        this.app.use('/api', require('../routes/tests'));
    }

    listen(){
        this.app.listen( 8080, ()=>{
            console.log('Servidor corriendo en el puerto 8080');
        });
    }
}


module.exports = Server;
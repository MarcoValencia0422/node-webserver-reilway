const http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'application/jsons'});
    const persona = {
        id:1,
        nombre: 'marco'
    }
    res.write(JSON.stringify(persona));
    res.end();
})
.listen(2020);
console.log('Escuchando en el puerto 2020');
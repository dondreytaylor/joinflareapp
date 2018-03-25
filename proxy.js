var proxy = require('redbird')({port: 80});
proxy.register("joinflareapp.com", "http://localhost:8000");

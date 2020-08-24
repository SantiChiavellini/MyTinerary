const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
})

// Como es un pedido a la API, es asíncrono (nos va a dar como resultado una promesa), entonces trabajo con:
.then(() => console.log('Database successfully connected'))
.catch(error => console.log('Connection to database failed'))
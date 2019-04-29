const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{    //task-manager-api = db. It is the name of the database.
//     useNewUrlParser: true, 
//     useCreateIndex: true,
//     useFindAndModify: false //to avoid the deprication warning
//  })


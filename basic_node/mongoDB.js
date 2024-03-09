
// dono same hai likhna ka tarekha alag alag hai
const { MongoClient } = require('mongodb') // modern terikha hai use karna ka
// const MongoClient = require('mongodb').MongoClient;

// const url = 'mongodb://localhost:27017' // kam nahi karta
const url = 'mongodb://127.0.0.1:27017'  // kam karta hai

const client = new MongoClient(url);

async function getData() {
    let value = await client.connect(); // return promise that's use await
    // let db = value.db('shop');
    // return db.collection('sales')
    // let collections = db.collection('sales')
    // let data = await collections.find().toArray();
    // console.log(data);

    let db = value.db('child');
    return db.collection('new')



}

module.exports = getData;




// toArray bi promise deta hai
// dono same hai redability second ki achi hai

// use of promises with then and catch

// getData().then((data) => console.log(data.find().toArray().then((data) => { console.log(data) }))).catch((err) => console.log(err)).catch((err) => console.log(err))

// getData().then((data)=>{
//     let val = data.find().toArray();
//     val.then((data)=>{
//         console.log(data);
//     }).catch((err)=>{
//         console.log(err);
//     })

// }).catch((err)=>{
//     console.log(er);
// })


// console.log(getData());


// get data from async and await
// const main = async ()=>{
//     let data = await (await getData()).find().toArray();
//     console.log(data);
// }

// main()



// insert operation in mongodb
// const insert = async ()=>{
//     let data = await getData();

//     data.insertMany([{'name':'karan','age':23},{'name':'popye','age':34}]);

//     let val = await data.find().toArray();
//     console.log(val);
    
    
// }

// insert()

//update operation in mongodb 


// const update = async ()=>{
//     let data = await getData();

//     data.updateOne({'name':'ajay'}, {$set : {'name':'vijay'}})

//     let val = await data.find().toArray();
//     console.log(val);

// }

// update()


// const deleteval = async ()=>{
//     let data = await getData();

//     data.deleteOne({'name':'vijay'})

//     let val = await data.find().toArray();
//     console.log(val);

// }

// deleteval()


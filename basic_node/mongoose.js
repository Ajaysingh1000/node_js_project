const mongoose = require('mongoose');



    
mongoose.connect('mongodb://127.0.0.1:27017/e-comm');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String

});






const saveInDB = async () => {

    


    const Product = mongoose.model('products', productSchema);
    let data = new Product({
        name: "max 100",
        price: 200,
        brand: 'maxx',
        category: 'Mobile'
    });
    const result = await data.save();
    console.log(result);
}
// saveInDB()

const updateInDB =async  () => {
    const Product = mongoose.model('products', productSchema);
    let data =await  Product.updateOne(
        { name: "max 100" },
        {
            $set: { price: 550,name:'max pro 6' }
        }
    )
    console.log(data)
}

// updateInDB()

const deleteInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({name:'max 100'})
    console.log(data);
}

// deleteInDB()
const findInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.find({name:'max 100'})
    console.log(data);
}

// findInDB();
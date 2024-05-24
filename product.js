// models/product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  travelTitle: {
    type: String,
    required:[true,"Title must be added"]
},
travelText: {
    type:String,
    required:[true,""]
},
travelPlace: {
    type:String,
    required:[true,""]
},
image: {
    type:String
}

},  {

timestamps:true
})

module.exports = mongoose.model('Product', productSchema);
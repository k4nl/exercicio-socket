const connection = require('./connection')
const { ObjectId } = require("mongodb");

const getAll = async () => {
  const db = await connection();
  console.log(db);
  return db.collection('produtos').find().toArray();
};

const increasePrice = (id) => connection().then(db => db.collection('produtos')
  .updateOne(
    { _id: ObjectId(id) },
    { $inc: { preco: 1} },
));

const getById = (id) => connection().then(db => db.collection('produtos')
.findOne({ _id: ObjectId(id) }));

module.exports = { 
  getAll,
  increasePrice,
  getById
}

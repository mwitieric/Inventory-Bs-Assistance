import { client } from "../.server/mongo";

let db = client.db("collection");

export async function createExpense(expensesObj) {
  let expensescollection = db.collection("expenses");

  return expensescollection.insertOne(expensesObj);
}

export async function createSales(salesObj) {
  let salescollection = db.collection("sales");

  return salescollection.insertOne(salesObj);
}

export async function createProducts(item) {
  let productscollection = db.collection("products");

  return productscollection.insertOne(item);
}

export async function createRestocks(restockObj) {
  let restockscollection = db.collection("restocks");

  return restockscollection.insertOne(restockObj);
}

// import { ObjectId } from "mongodb";

// export async function updateSale(id, updates) {
//   const salesCollection = db.collection("sales");

//   return salesCollection.updateOne(
//     { _id: new ObjectId(id) },
//     { $set: updates }
//   );
// }

// export async function deleteSale(id) {
//   const salesCollection = db.collection("sales");
//   return salesCollection.deleteOne({ _id: new ObjectId(id) });
// }

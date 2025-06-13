import StockOverview from "../components/StockOverview";
import FinancialSummary from "../components/FinancialSummary";

// import UnifiedForm from "../components/UnifiedForm";
import { Link, useActionData, useSubmit, Form } from "react-router";

import {
  createExpense,
  createSales,
  createRestocks,
} from "../models/collection.server";

// export async function action({ request }) {
//   let formData = await request.formData();
//   let action = formData.get("_action");

//   console.log("Action called!!");

//   switch (action) {
//     case "add-sale": {
//       console.log({ action });
//       let product = formData.get("product");
//       let quantity = formData.get("quantity");
//       let unitPrice = formData.get("unitPrice");
//       let date = formData.get("date");

//       let fieldError = {
//         product: product ? null : "Product is required",
//         quantity: quantity ? null : "Quantity is required",
//         unitPrice: unitPrice ? null : "Unit price is required",
//         date: date ? null : "Date is required",
//       };

//       if (Object.values(fieldError).some(Boolean)) {
//         return { fieldError };
//       }

//       // Add to DB
//       let salesObj = {
//         product: product,
//         quantity: quantity,
//         unitPrice: unitPrice,
//         date: date,
//       };

//       let result = await createSales(salesObj);
//       console.log({ result });

//       break;
//     }

//     case "add-expense": {
//       console.log({ action });
//       let category = formData.get("category");
//       let date = formData.get("date");

//       let fieldError = {
//         category: category ? null : "Category is required",
//         date: date ? null : "Date is required",
//       };

//       if (Object.values(fieldError).some(Boolean)) {
//         return { fieldError };
//       }

//       //add to db
//       let expensesObj = {
//         category: category,
//         date: date,
//       };

//       let result = await createExpense(expensesObj);
//       console.log({ result });

//       break;
//     }

//     case "add-restock": {
//       console.log({ action });
//       let product = formData.get("product");
//       let quantity = formData.get("quantity");
//       let unitPrice = formData.get("unitPrice");
//       let date = formData.get("date");

//       let fieldError = {
//         product: product ? null : "Product is required",
//         quantity: quantity ? null : "Quantity is required",
//         unitPrice: unitPrice ? null : "Unit price is required",
//         date: date ? null : "Date is required",
//       };

//       if (Object.values(fieldError).some(Boolean)) {
//         return { fieldError };
//       }

//       //add to db
//       let restockObj = {
//         product: product,
//         quantity: quantity,
//         unitPrice: unitPrice,
//         date: date,
//       };

//       let result = await createRestocks(restockObj);
//       console.log({ result });

//       break;
//     }
//   }

//   return null;
// }

export default function Panel() {
  let actionData = useActionData();
  return (
    <div className="text-black p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-start">
        <Link
          to="/"
          className="bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-md px-5 py-2 shadow-md transition duration-300"
        >
          ⬅ Home
        </Link>
      </div>

      <div className="grid grid-cols-1  gap-4">
        <StockOverview />
      </div>

      <FinancialSummary />

      {/* <div className="mt-6">
        <UnifiedForm actionData={actionData} />
      </div> */}

      <div>
        <Table actionData={actionData} />
      </div>
    </div>
  );
}

export async function action({ request }) {
  let formData = await request.formData();
  let action = formData.get("_action");

  switch (action) {
    case "add-sale": {
      console.log({ action });
      let product = formData.get("product");
      let quantity = formData.get("quantity");
      let unitPrice = formData.get("unitPrice");
      let date = formData.get("date");

      let fieldError = {
        product: product ? null : "Product is required",
        quantity: quantity ? null : "Quantity is required",
        unitPrice: unitPrice ? null : "Unit price is required",
        date: date ? null : "Date is required",
      };

      if (Object.values(fieldError).some(Boolean)) {
        return { fieldError };
      }

      // Add to DB
      let salesObj = {
        product: product,
        quantity: quantity,
        unitPrice: unitPrice,
        date: date,
      };

      let result = await createSales(salesObj);
      console.log({ result });

      break;
    }

    case "add-expense": {
      console.log({ action });
      let category = formData.get("category");
      let date = formData.get("date");

      let fieldError = {
        category: category ? null : "Category is required",
        date: date ? null : "Date is required",
      };

      if (Object.values(fieldError).some(Boolean)) {
        return { fieldError };
      }

      //add to db
      let expensesObj = {
        category: category,
        date: date,
      };

      let result = await createExpense(expensesObj);
      console.log({ result });

      break;
    }
    case "add-restock": {
      console.log({ action });
      let product = formData.get("product");
      let quantity = formData.get("quantity");
      let unitPrice = formData.get("unitPrice");
      let date = formData.get("date");

      let fieldError = {
        product: product ? null : "Product is required",
        quantity: quantity ? null : "Quantity is required",
        unitPrice: unitPrice ? null : "Unit price is required",
        date: date ? null : "Date is required",
      };

      if (Object.values(fieldError).some(Boolean)) {
        return { fieldError };
      }

      //add to db
      let restockObj = {
        product: product,
        quantity: quantity,
        unitPrice: unitPrice,
        date: date,
      };

      let result = await createRestocks(restockObj);
      console.log({ result });

      break;
    }
  }

  return null;
}

export function Table({ actionData }) {
  let submit = useSubmit();

  return (
    <div className="text-black bg-white">
      {/* Stock Table */}
      <div className="grid grid-cols-1 mt-9  gap-8 mb-10">
        {/* Stock Table */}
        <div className="bg-white p-4 rounded-2xl shadow mb-8">
          <h3 className="text-lg font-semibold mb-4 text-[#374151]">
            Stock Table
          </h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="text-base font-medium text-[#374151] p-3 border-b-2 border-[#A7BEAE] ">
                  Product
                </th>
                <th className="text-base font-medium text-[#374151] p-3 border-b-2 border-[#A7BEAE]">
                  Current Stock
                </th>
                <th className="text-base font-medium text-[#374151] p-3 border-b-2 border-[#A7BEAE] ">
                  Reorder Level
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t-2 border-[#A7BEAE] hover:bg-[#f5f5db]">
                <td className="text-[#374151] p-3 ">Turmeric</td>
                <td className="text-[#374151] p-3 ">45</td>
                <td className="text-[#374151] p-3 ">30g</td>
              </tr>
              <tr className="border-t-2 border-[#A7BEAE] hover:bg-[#f5f5db]">
                <td className="text-[#374151] p-3 ">Cloves</td>
                <td className="text-[#374151] p-3 ">100</td>
                <td className="text-[#374151] p-3 ">4.5g</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Add Sale Form */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-4">Add Sale</h3>
            <Form method="post" className="space-y-2">
              <input type="hidden" name="_action" value="add-sale" />
              <input
                name="product"
                className="w-full border rounded px-2 py-1"
                placeholder="Product"
              />
              {actionData?.fieldError.product && (
                <p className="text-red-500 mt-2">
                  {actionData.fieldError.product}
                </p>
              )}
              <input
                name="quantity"
                className="w-full border rounded px-2 py-1"
                placeholder="Quantity"
                type="number"
              />
              {actionData?.fieldError.quantity && (
                <p className="text-red-500 mt-2">
                  {actionData.fieldError.quantity}
                </p>
              )}
              <input
                name="unitPrice"
                className="w-full border rounded px-2 py-1"
                placeholder="Unit Price"
                type="number"
              />
              {actionData?.fieldError.unitPrice && (
                <p className="text-red-500 mt-2">
                  {actionData.fieldError.unitPrice}
                </p>
              )}
              <input
                name="date"
                className="w-full border rounded px-2 py-1"
                type="date"
              />
              {actionData?.fieldError.date && (
                <p className="text-red-500 mt-2">
                  {actionData.fieldError.date}
                </p>
              )}
              <button className="bg-green-600 text-white px-4 py-1 rounded w-full">
                Add
              </button>
            </Form>
          </div>

          {/* Add Expense Form */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-4">Add Expense</h3>
            <Form method="post" className="space-y-2">
              <input type="hidden" name="_action" value="add-expense" />
              <input
                name="category"
                className="w-full border rounded px-2 py-1"
                placeholder="Category"
              />
              {actionData?.fieldError.category && (
                <p className="text-red-500 mt-2">
                  {actionData.fieldError.category}
                </p>
              )}
              <input
                name="date"
                className="w-full border rounded px-2 py-1"
                type="date"
              />
              {actionData?.fieldError.date && (
                <p className="text-red-500 mt-2">
                  {actionData.fieldError.date}
                </p>
              )}
              <button className="bg-green-600 text-white px-4 py-1 rounded w-full">
                Add
              </button>
            </Form>
          </div>

          {/* Add Restock Form */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-4">Add Restock</h3>
            <Form method="post" className="space-y-2">
              <input type="hidden" name="_action" value="add-restock" />
              <input
                name="product"
                className="w-full border rounded px-2 py-1"
                placeholder="Product"
              />
              {actionData?.fieldError.product && (
                <p className="text-red-500 mt-2">
                  {actionData.fieldError.product}
                </p>
              )}
              <input
                name="quantity"
                className="w-full border rounded px-2 py-1"
                placeholder="Quantity"
                type="number"
              />
              {actionData?.fieldError.quantity && (
                <p className="text-red-500 mt-2">
                  {actionData.fieldError.quantity}
                </p>
              )}
              <input
                name="unitPrice"
                className="w-full border rounded px-2 py-1"
                placeholder="Unit Price"
                type="number"
              />
              {actionData?.fieldError.unitPrice && (
                <p className="text-red-500 mt-2">
                  {actionData.fieldError.unitPrice}
                </p>
              )}
              <input
                name="date"
                className="w-full border rounded px-2 py-1"
                type="date"
              />
              {actionData?.fieldError.date && (
                <p className="text-red-500 mt-2">
                  {actionData.fieldError.date}
                </p>
              )}
              <button className="bg-green-600 text-white px-4 py-1 rounded w-full">
                Add
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { Form, useSubmit } from "react-router";

// export default function UnifiedForm({ actionData }) {
//   let submit = useSubmit();
//   return (
//     <Form
//       method="post"
//       className="bg-white p-4 rounded-xl shadow"
//       onChange={(event) => {
//         submit(event.currentTarget);
//       }}
//     >
//       <h2 className="text-lg font-semibold mb-2">
//         Log a Sale / Expense / Restock
//       </h2>
//       <input
//         name="product"
//         placeholder="Product"
//         className="border p-2 rounded w-full mb-2"
//       />
//       {actionData?.fieldError.product ? (
//         <p className="text-red-500 mt-2">{actionData.fieldError.product}</p>
//       ) : null}
//       <input
//         name="category"
//         placeholder="Category"
//         className="border p-2 rounded w-full mb-2"
//       />
//       {actionData?.fieldError.category ? (
//         <p className="text-red-500 mt-2">{actionData.fieldError.category}</p>
//       ) : null}
//       <input
//         name="date"
//         type="date"
//         className="border p-2 rounded w-full mb-2"
//       />
//       {actionData?.fieldError.date ? (
//         <p className="text-red-500 mt-2">{actionData.fieldError.date}</p>
//       ) : null}
//       <input
//         name="amount"
//         placeholder="Quantity / Price"
//         className="border p-2 rounded w-full mb-4"
//       />
//       {actionData?.fieldError.amount.quantity ? (
//         <p className="text-red-500 mt-2">
//           {actionData.fieldError.amount.quantity}
//         </p>
//       ) : null}
//       <button
//         type="submit"
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Submit
//       </button>
//     </Form>
//   );
// }

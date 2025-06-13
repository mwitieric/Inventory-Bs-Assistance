// import { data, Form } from "react-router";
// // import nodemailer from "nodemailer";

// import {
//   validateEmail,
//   validatePhone,
//   validateText,
// } from "../.server/validation";

// //want to handle post request
// export async function action({ request }) {
//   let formData = await request.formData();
//   //get values submitted from the form
//   let name = formData.get("name");
//   let phone = formData.get("phone");
//   let email = formData.get("email");
//   let message = formData.get("message");

//   //validation
//   let fieldErrors = {
//     namme: validateText(name),
//     phone: validatePhone(phone),
//     email: validateEmail(email),
//     message: validateText(message),
//   };

//   if (Object.values(fieldErrors).some(Boolean)) {
//     return data(
//       { fieldErrors },
//       {
//         status: 404,
//         statusText: "bad request",
//       }
//     );
//   }

//   console.log({ name, phone, email, message });
//   return null;
// }

// //send email

// // let transporter = nodemailer.createTransport({
// //   service: "gmail",
// //   auth: {
// //     user: "mwitieric955@gmail.com",
// //     pass: "dmrxbnfuidqhjbvf",
// //   },
// // });
// // transporter.sendMail(
// //   {
// //     from: "mwitieric955@gmail.com", // sender address
// //     to: "mwitieric955@gmail.com", // list of receivers
// //     subject: "Hello ✔", // Subject line
// //     text: `"submitted"`,
// //   },
// //   (error, info) => {
// //     if (error) {
// //       console.log(error);
// //     }
// //     console.log(`Email sent ${info.response} `);
// //   }
// // );
// // res.redirect("/");

// export default function contact({ actionData }) {
//   console.log({ actionData });
//   return (
//     <main className="max-w-6xl nx-auto ">
//       <h1 className="font-bold text-4xl text-amber-300 px-150">Contact</h1>
//       <Form method="post" className="space-y-9 px-45 mt-5">
//         <FormSpacer>
//           <Label htmlFor="name" text="Name" />
//           <Input
//             type="text"
//             id="name"
//             name="name"
//             hasError={actionData?.fieldErrors.name}
//           />
//           {actionData?.fieldErrors.name ? (
//             <p className="text-amber-600">{actionData.fieldErrors.name}</p>
//           ) : null}
//         </FormSpacer>

//         <FormSpacer>
//           <Label htmlFor="phone" text="Phone" />
//           <Input
//             type="text"
//             id="phone"
//             name="phone"
//             hasError={actionData?.fieldErrors.phone}
//           />
//           {actionData?.fieldErrors.phone ? (
//             <p className="text-amber-600">{actionData.fieldErrors.phone}</p>
//           ) : null}
//         </FormSpacer>

//         <FormSpacer>
//           <Label htmlFor="email" text="Email" />
//           <Input
//             type="text"
//             id="email"
//             name="email"
//             hasError={actionData?.fieldErrors.email}
//           />
//           {actionData?.fieldErrors.email ? (
//             <p className="text-amber-600">{actionData.fieldErrors.email}</p>
//           ) : null}
//         </FormSpacer>

//         <FormSpacer>
//           <Label htmlFor="message" text="Message" />
//           <Input
//             type="text"
//             id="message"
//             name="message"
//             hasError={actionData?.fieldErrors.message}
//           />
//           {actionData?.fieldErrors.message ? (
//             <p className="text-amber-600">{actionData.fieldErrors.message}</p>
//           ) : null}
//         </FormSpacer>

//         <button type="sumbit" className="bg-amber-500 ">
//           Send Message
//         </button>
//       </Form>
//     </main>
//   );
// }

// function Label({ htmlFor, text }) {
//   return <label htmlFor={htmlFor}>{text}</label>;
// }
// function Input({ type, id, name, hasError }) {
//   return (
//     <input
//       type={type}
//       id={id}
//       name={name}
//       className={`border${
//         hasError ? "border-b-red-700" : "border-b-gray-500"
//       } border py-5`}
//     ></input>
//   );
// }

// function FormSpacer({ children }) {
//   return <div className="flex flex-col gap-2 ">{children}</div>;
// }

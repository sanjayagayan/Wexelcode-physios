// import axios from "axios";
// import { AdapterUser } from "next-auth/adapters";
// export interface CustomAdapterUser extends AdapterUser {
//   phone: string;
// }
// //
// export default function AuthAdapter(): any {
//   const token ="";
//   const headers = {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`,
//   };
 
  
//   return {
//     async getUser(id: string): Promise<AdapterUser | undefined> {
//       try {
//         console.log("id");
//         const getUserBySubRequest = { params: { sub: id }, headers };
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/users`,
//           getUserBySubRequest
//         );
        
        
//         //
//         return response?.data?.data[0] as unknown as AdapterUser;
//       } catch (error) {
//         console.log(error);
//         return;
//       }
//     },
//     async getUserByEmail(email: string): Promise<AdapterUser | undefined> {
//       console.log("id");
//       try {
//         const getUserByEmailRequest = { params: { email }, headers };
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/users`,
//           getUserByEmailRequest
//         );
//         console.log(response);
//         //
//         return response?.data?.data[0] as unknown as AdapterUser;
//       } catch (error) {
//         console.log(error);
//         return;
//       }
//     },
//     async getUserByAccount({
//       providerAccountId,
//     }) {
//       console.log("id");
//       try {
//         const getUserBySubRequest = {
//           params: { sub: providerAccountId },
//           headers,
//         };
//         const response = await axios.get(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/users`,
//           getUserBySubRequest
//         );
//         console.log(response);
//         //
//         return response?.data?.data[0] as unknown as AdapterUser;
//       } catch (error) {
//         console.log(error);
//         return;
//       }
//     },
//     async updateUser() {
//       return;
//     },
//     async deleteUser() {
//       return;
//     },
//     async linkAccount() {
//       return;
//     },
//     async unlinkAccount({}) {
//       return;
//     },
//     async createSession({}) {
//       return;
//     },
//     async getSessionAndUser() {
//       return;
//     },
//     async updateSession({}) {
//       return;
//     },
//     async deleteSession() {
//       return;
//     },
//     async createVerificationToken({}) {
//       return;
//     },
//     async useVerificationToken({}) {
//       return;
//     },
//   };
// }

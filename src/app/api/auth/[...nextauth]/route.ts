// import CredentialsProvider from 'next-auth/providers/credentials';
// import NextAuth, { NextAuthOptions, User } from 'next-auth';
// import { $authAxios } from '@/entities/auth';
//
// const authOptions: NextAuthOptions = {
//   pages: {
//     signIn: '/login',
//   },
//   session: {
//     strategy: 'jwt',
//   },
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: {
//           label: 'Email',
//           type: 'text',
//           placeholder: 'Enter your email',
//         },
//         password: {
//           label: 'Password',
//           type: 'password',
//           placeholder: 'Enter your password',
//         },
//       },
//       async authorize(credentials, req) {
//         try {
//           if (credentials) {
//             const userData = { email: credentials.email, password: credentials.password };
//             const res = await $authAxios.post('/login', userData);
//             return res.data;
//           }
//         } catch (error: any) {
//           return null;
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       console.log(token, user, 'sadasds');
//       if (user) token.user = user as User;
//       return token;
//     },
//
//     async session({ token, session }) {
//       console.log(token, session, 'adssadas');
//       if (session) {
//         session.user = token.user as User;
//       }
//       return session;
//     },
//   },
// };
//
// const handler = NextAuth(authOptions);
//
// export { handler as GET, handler as POST };

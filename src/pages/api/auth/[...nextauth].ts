import NextAuth from 'next-auth'; // importando o next auth
import GoogleProvider from 'next-auth/providers/google' // importando o provedor da auth que no caso será o google

// Repassando os dados de .ENV 


export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string, // estou confirmando que Google_client é uma string
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

    })
  ],
  secret: process.env.JWT_SECRET as string, 
}

export default NextAuth(authOptions)
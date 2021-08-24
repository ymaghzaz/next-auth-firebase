import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import {signInWithEmailAndPassword} from '../../../src/utils/firebase'

export default NextAuth({
    providers: [
        Providers.Credentials({
            name: 'Credentials',
            credentials: {
                username: {label: "email", type: "text", placeholder: "jsmith"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials, req) {
                console.log('credentials', credentials)
                let user = null
                try {
                    const data = await signInWithEmailAndPassword(credentials.username, credentials.password)

                    if (data && data.user) {
                        user = {
                            uid: data.user.uid,
                            email: data.user.email,
                            displayName: data.user.displayName,
                            photoURL: data.user.photoURL,
                            emailVerified: data.user.emailVerified,
                            phoneNumber: data.user.phoneNumber,
                            isAnonymous: data.user.isAnonymous
                        }
                    }
                } catch (e) {
                    console.log('e', e)
                }

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null or false then the credentials will be rejected
                    return null
                    // You can also Reject this callback with an Error or with a URL:
                    // throw new Error('error message') // Redirect to error page
                    // throw '/path/to/redirect'        // Redirect to a URL
                }
            }
        })
    ],
    session: {
        jwt: true,
    },
    jwt: {
        secret: 'tRp214vVnCuNJ5x0alsdkjfklasdjfklajslkdfjlkajsBCxQlAjX',
        encryption: true,
    }, callbacks: {
        jwt: async (token, user, account, profile, isNewUser) => {
            if (user) {
                return {
                    ...user,
                }
            }

            return {...token}
        },
        session: async (session, token) => {
            return {...session, token}
        },
    },
})
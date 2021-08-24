import {getSession, useSession , signOut} from "next-auth/client";


export default function Home() {
    return (
        <div>
            <h1> hello world </h1>
            <button onClick={()=>{
                signOut()
            }
            }> logout</button>
        </div>
    )
}


export async function getServerSideProps(context) {
    const session = await getSession(context)
    console.log('session',session)
    if (!session) {
        return {
            redirect: {
                destination: 'signIn',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}
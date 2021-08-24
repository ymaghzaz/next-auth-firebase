import {useRef} from "react";
import {getSession, signIn} from 'next-auth/client'


const SignIn = () => {
    const email = useRef()
    const password = useRef()
    const signInService = async  () => {
        console.log(email.current.value, password.current.value)
        await signIn("credentials", {
            redirect: true,
            callbackUrl:'/',
            username: email.current.value,
            password: password.current.value,
        })
    }
    return <div style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "700px",
        justifyContent: "center",
        alignItems: "center"
    }
    }>
        <h1>SignIn</h1>
        <input ref={email} type='email' style={{
            height: '50px',
            width: "300px"
        }
        }/>

        <input ref={password} type='password' style={{
            height: '50px',
            width: "300px"
        }
        }/>

        <button style={{
            height: '50px',
            width: "300px",
            backgroundColor: "#000",
            color: "#fff"
        }
        } onClick={signInService}>
            sign in
        </button>
    </div>
}


export async function getServerSideProps(context) {
    const session = await getSession(context)
    if (session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}
export default SignIn
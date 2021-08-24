import {useRef} from "react";
import {getSession, signIn} from 'next-auth/client'
import {useForm} from "react-hook-form";

const SignIn = () => {
    const {register, handleSubmit} = useForm()
    const submit = async (data) => {
        await signIn("credentials", {
            redirect: true,
            callbackUrl: '/',
            username: data.email,
            password: data.password
        })
    }
    return <form style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "700px",
        justifyContent: "center",
        alignItems: "center"
    }
    } onSubmit={handleSubmit(submit)}>
        <h1>SignIn</h1>
        <input {...register('email')} type='email' style={{
            height: '50px',
            width: "300px"
        }
        }/>

        <input  {...register('password')} type='password' style={{
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
        }>
            sign in
        </button>
    </form>
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
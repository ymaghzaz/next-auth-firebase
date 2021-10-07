import { useRef } from "react";
import { getSession, signIn } from "next-auth/client";
import { useForm } from "react-hook-form";
import classes from "./singIn-form.module.css";

const SingInForm = () => {
  const { register, handleSubmit } = useForm();
  const submit = async (data) => {
    await signIn("credentials", {
      redirect: true,
      callbackUrl: "/",
      username: data.email,
      password: data.password,
    });
  };
  return (
    <section className={classes.auth}>
      <form onSubmit={handleSubmit(submit)}>
        <h1>SignIn</h1>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input {...register("email")} type="email" />
        </div>
        <div className={classes.control}>
          <label htmlFor="password"> Password </label>
          <input {...register("password")} type="password" />
        </div>

        <div className={classes.actions}>
          <button>sign in</button>
        </div>
      </form>
    </section>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default SingInForm;

import { getSession, useSession, signOut } from "next-auth/client";
import StartingPageContent from "../components/starting-page/starting-page";

export default function Home() {
  return <StartingPageContent />;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log("session", session);
  if (!session) {
    return {
      redirect: {
        destination: "SingIn",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

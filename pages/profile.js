import { getSession, useSession, signOut } from "next-auth/client";
import UserProfile from "../components/profil/user-profile";

const ProfilePage = (props) => {
  console.log(props);

  return <UserProfile />;
};

export default ProfilePage;

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
    props: { session },
  };
}

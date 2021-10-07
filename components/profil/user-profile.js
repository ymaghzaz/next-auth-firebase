import UploadFile from "../upload/upload";
import classes from "./user-profile.module.css";

const UserProfile = () => {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>

      <UploadFile />
    </section>
  );
};

export default UserProfile;

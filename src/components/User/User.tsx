import { UserProps } from "./User.props";
import styles from "./User.module.css";
import { UserIcon } from "../../helpers/icons/UserIcon";
import { useSelector } from "react-redux";

import { IRootState, useAppDispatch } from "../../store";
import { getProfile, logoutUser } from "../../store/auth/authCreators";
import { Link } from "react-router-dom";

function User({ className, ...props }: UserProps): JSX.Element {
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authDate.accessToken
  );
  const profile = useSelector(
    (state: IRootState) => !!state.auth.profileData.profile
  );
  const dispatch = useAppDispatch();
  const renderProfileInfo = () => (
    <>
      <Link className={styles.userLink} to={"/user "}>
        <div className={styles.userName}>{profile.valueOf()}</div>
        <div className={styles.userName}>{isLoggedIn}</div>
        <div className={styles.userPhoto}>
          <UserIcon />
        </div>
      </Link>
      <button
        onClick={() => {
          dispatch(logoutUser());
        }}
      >
        Logout
      </button>
      <button
        onClick={() => {
          dispatch(getProfile());
        }}
      >
        update Profile
      </button>
    </>
  );
  const renderDefaultInfo = () => (
    <Link className={styles.userLink} to={"/user "}>
      <div className={styles.userName}>{"Create an Account"}</div>
      <div className={styles.userPhoto}>
        <UserIcon />
      </div>
    </Link>
  );
  return (
    <div className={styles.userWrapper}>
      {isLoggedIn ? renderProfileInfo() : renderDefaultInfo()}
    </div>
  );
}

export default User;

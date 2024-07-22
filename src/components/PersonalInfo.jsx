import Raect from "react";
import styles from "../styles/PersonalInfo.module.css";

const PersonalInfo = () => {
  return (
    <div className={styles.formDiv}>
      <form>
        <label>First Name</label>
        <input type="text" />
        <label>Last Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Phone</label>
        <input type="number" />
        <label>Gender</label>
        <select>
          <option name="male" value="male">
            Male
          </option>
          <option name="female" value="female">
            Female
          </option>
          <option name="other" value="other">
            Other
          </option>
        </select>
        <button>Update</button>
      </form>
    </div>
  );
};

export { PersonalInfo };

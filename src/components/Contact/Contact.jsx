import { FaPhoneAlt } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import css from "./Contact.module.css";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <li className={css.contact}>
      <div className={css.contactCard}>
        <div>
          <div className={css.contactItem}>
            <FaUserLarge className={css.icon} />
            <p>{name}</p>
          </div>
          <div className={css.contactItem}>
            <FaPhoneAlt className={css.icon} />
            <p>{number}</p>
          </div>
        </div>
        <button type="click" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;

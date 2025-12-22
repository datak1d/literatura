import s from "./Alert.module.css";

const Alert = ({ children }) => {
  const openModal = () => document.getElementById("myDialog").showModal();
  const closeModal = () => document.getElementById("myDialog").close();

  return (
    <>
      <button className="btn btn-primary" onClick={openModal}>
        Open dialog
      </button>
      <dialog id="myDialog" className={s.alertWrapper}>
        <div>{children}</div>
        <button onClick={closeModal}>&#x2716;</button>
      </dialog>
    </>
  );
};
Alert.Title = ({ children }) => <div>{children}</div>;
Alert.Description = ({ children }) => <div>{children}</div>;

export default Alert;

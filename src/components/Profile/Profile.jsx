import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";
import { supabase } from "../../supabaseClient";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setEmail(user.email);
      }
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    setShowModal(true);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Delay for spinner effect
    await supabase.auth.signOut();
    navigate("/signup");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Welcome</h2>
        <p className={styles.email}><strong>Dear</strong>  {email}</p>
        <button className={styles.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      </div>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalBox}>
            <div className={styles.spinner}></div>
            <p>Logging out...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

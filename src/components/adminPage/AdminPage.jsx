import React, { useContext } from "react";
import { UserContext } from "../../App";

const AdminPage = () => {
  const { user, setUser } = useContext(UserContext);

  return <div>AdminPage</div>;
};

export default AdminPage;

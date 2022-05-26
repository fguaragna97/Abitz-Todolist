import React, { useContext, useEffect } from "react";
import TaskList from "../components/TaskList";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  const { user, tasks, setTask } = useContext(UserContext);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("http://localhost:3001/home/alltask", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        });
        const apidata = await response.json();
        setTask(apidata);
      } catch (error) {}
    };
    fetchdata();
  }, []);

  return user?.email ? <TaskList data={tasks}></TaskList> : navigate("/login");
}

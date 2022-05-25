import React, { useContext, useEffect } from "react";
import TaskList from "../components/TaskList";
import { UserContext } from "../App";

export default function Home() {
  const { tasks, setTask } = useContext(UserContext);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("http://localhost:3001/home/alltask", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const apidata = await response.json();
        setTask(apidata);
      } catch (error) {}
    };

    fetchdata();
  }, []);

  return <TaskList data={tasks}></TaskList>;
}

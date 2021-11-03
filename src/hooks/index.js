import { collection, getFirestore, where, query } from "@firebase/firestore";
import { useState, useEffect } from "react";
import { collatedTaskExist } from "../helpers";
import moment from "moment";
const db = getFirestore();

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = query(
      collection(db, "tasks"),
      where("userId", "==", "sdDSFdssdDd", true)
    );
    unsubscribe =
      selectedProject && !collatedTaskExist(selectedProject)
        ? (unsubscribe = query(
            collection(db, "tasks"),
            where("projectId", "==", "1", true)
          ))
        : selectedProject === "TODAY"
        ? (unsubscribe = query(
            collection(db, "tasks"),
            where("date", "==", moment().format("DD/MM/YYYY"), true)
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubscribe = query(
            collection(db, "tasks"),
            where("date", "==", "", true)
          ))
        : unsubscribe;

    return () => unsubscribe();
  }, [selectedProject]);

  return { tasks };
};

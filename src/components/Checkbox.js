import { doc, updateDoc } from "@firebase/firestore";
import React from "react";
import { db } from "../firebase";

export const Checkbox = ({ id }) => {
  const archiveTask = () => {
    const update = doc(db, "tasks", id);
    updateDoc(update, {
      archived: true,
    });
  };

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archiveTask()}
    >
      <span className="checkbox"></span>
    </div>
  );
};

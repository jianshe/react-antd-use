import React, { useState } from "react";
import Dialog from "../components/Dialog";

export default function DialogPage() {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div className="dialogPgae">
      <h1>DialogPage</h1>
      <button onClick={() => setShowDialog(!showDialog)}>toggle</button>
      {showDialog && <Dialog />}
    </div>
  );
}

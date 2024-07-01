import React, { useEffect } from "react";

const UseEffectCleanUP = () => {
  const connecting = () => console.log("connecting....");
  const disconnecting = () => console.log("disconnecting...");

  useEffect(() => {
    connecting();
    return () => disconnecting();
  });
  return <div>UseEffectCleanUP</div>;
};

export default UseEffectCleanUP;

import { useEffect, useState } from "react";

function EffectInfo() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("LifeOS is ready to use.");
  }, []);

  return (
    <p>{message}</p>
  );
}

export default EffectInfo;
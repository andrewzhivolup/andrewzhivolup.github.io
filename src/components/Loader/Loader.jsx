import { useEffect, useState } from "react";
import cls from "./Loader.module.scss";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className={loading ? "" : cls.hidden}>
      <div className={cls.body}>
        <span className={cls.loader}></span>
      </div>
    </div>
  );
}

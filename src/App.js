// libs
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    setTimeout(() => alert("Chào mừng bạn đến với YOOT"), 5000);
  }, []);

  return <></>;
};

export default App;

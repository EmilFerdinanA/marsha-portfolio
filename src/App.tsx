import { RouterProvider } from "react-router";
import { useEffect } from "react";
import AOS from "aos";

import { router } from "./router/routes";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

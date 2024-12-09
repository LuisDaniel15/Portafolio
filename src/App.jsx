import "./App.css";
import { Cuerpo } from "./components/Cuerpo";
import Carta from "./components/Carta";
import Navigat from "./components/Navigat";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Educacion from "./components/Educacion";
import Contacto from "./components/Contacto";
import Proyectos from "./components/Proyectos";
import { motion } from "framer-motion"; 

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.6 } },
};

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-5 min-h-[855px] pt-24 ">
      <Carta />
      <div className="fade-wrapper bg-white/80 w-full max-w-[800px] min-h-[855px] rounded-md m-auto lg:m-0">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={pageVariants}
              >
                <Cuerpo />
              </motion.div>
            }
          />
          <Route
            path="/educacion"
            element={
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={pageVariants}
              >
                <Educacion />
              </motion.div>
            }
          />
          <Route
            path="/proyectos"
            element={
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={pageVariants}
              >
                <Proyectos />
              </motion.div>
            }
          />
          <Route
            path="/contacto"
            element={
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={pageVariants}
              >
                <Contacto />
              </motion.div>
            }
          />
        </Routes>
        {/* <Footer /> */}
      </div>
      <Navigat />
    </div>
  );
}

export default App;

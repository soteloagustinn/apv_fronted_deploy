import { useContext } from "react";
import PacientesContex from "../context/PacientesProvider";

const usePacientes = () =>{
    return useContext(PacientesContex)
}

export default usePacientes
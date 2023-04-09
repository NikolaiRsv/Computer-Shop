import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { computerServiceFactory } from "../services/computerService.js";

export const ComputerContext = createContext();

export const ComputerProvider = ({ children }) => {
  const navigate = useNavigate();
  const [computers, setComputers] = useState([]);
  const computerService = computerServiceFactory();

  useEffect(() => {
    computerService
      .getAll()
      .then((result) => {
        setComputers(result);
      })
    }, []);

  const onCreateComputerSubmit = async (data) => {
    try {
      const newComputer = await computerService.create(data);
      setComputers((state) => [...state, newComputer]);
      navigate("/catalog");
    } catch (error) {
      console.error("Error creating computer:", error);
    }
  };

  const onComputerEditSubmit = async (values) => {
    try {
      const result = await computerService.edit(values._id, values);
      setComputers((state) =>
        state.map((x) => (x._id === values._id ? result : x))
      );
      navigate(`/catalog/${values._id}`);
    } catch (error) {
      console.error("Error editing computer:", error);
    }
  };

  const deleteComputer = (computerId) => {
    setComputers((state) =>
      state.filter((computer) => computer._id !== computerId)
    );
  };

  const getComputer = (computerId) => {
    return computers.find((computer) => computer._id === computerId);
  };

  const contextValues = {
    computers,
    onCreateComputerSubmit,
    onComputerEditSubmit,
    deleteComputer,
    getComputer,
  };

  return (
    <ComputerContext.Provider value={contextValues}>
      {children}
    </ComputerContext.Provider>
  );
};

export const useComputerContext = () => {
  const context = useContext(ComputerContext);

  return context;
};

import { createContext, useContext } from "react";

export const Tripcontext = createContext({
  items: [
    {
      id: Date.now(),
      name: "",
      number: 0,
      striked: false,
    },
  ],
  setItemdetail: (item) => {},
  editItemdetail: (item, id) => {},
  deleteItem: (id) => {},
  toggleStriked: (id) => {},
})
export const useTripcontext = () => useContext(Tripcontext)
export const TripProvider = Tripcontext.Provider

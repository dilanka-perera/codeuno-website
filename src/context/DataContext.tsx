"use client";

import { createContext, useContext, ReactNode } from "react";
import { Website } from "@/types/hygraph"; // Make sure this matches your existing types

interface DataContextProps {
  website: Website | null;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider = ({
  children,
  website,
}: {
  children: ReactNode;
  website: Website | null;
}) => {
  return (
    <DataContext.Provider value={{ website }}>{children}</DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within a DataProvider");
  return context;
};

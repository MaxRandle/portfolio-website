import React, { createContext, useReducer, useEffect } from "react";
import { BookListReducer } from "../reducers/BookListReducer";

export const BookListContext = createContext();

const BookListContextProvider = props => {
  const [BookList, dispatch] = useReducer(BookListReducer, [], () => {
    const localData = localStorage.getItem("BookList");
    return localData
      ? JSON.parse(localData)
      : [
          {
            id: "Kappa",
            data: {
              title: "",
              author: ""
            }
          }
        ];
  });

  useEffect(() => {
    localStorage.setItem("BookList", JSON.stringify(BookList));
  }, [BookList]);

  return <BookListContext.Provider value={{ BookList, dispatch }}>{props.children}</BookListContext.Provider>;
};

export default BookListContextProvider;

import React from "react";

const BookmarkContext = React.createContext({
  bookmarks: [],
  editBookMarks:[],
  addBookmark: (bookmark) => {},
  removeBookmark: (id) => {},
  editBookmark :()=>{},
 
});

export default BookmarkContext;
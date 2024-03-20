import React, { useState } from "react";
import Input from "./Components/Input/Input";
import BookMarkProvider from "./Components/Store/BookMarkProvider";
import BookmarkDetail from "./Components/BookmarkItems/BookmarkDetail";

function App() {
  const [openModal, setOpenModal]=useState(false)

  const showModal =()=>{
    setOpenModal(true)
  }

  const hideModal =()=>{
    setOpenModal(false)
  }


  return (
    <BookMarkProvider>
        <h1>BookMark Website</h1>                                                                                                                  
        {openModal && <Input onHideModal={hideModal}/>}
        <button onClick={showModal}>Add Bookmark</button> 

        <main>
          <BookmarkDetail onShowmodal={showModal}/>
        </main>
        
    </BookMarkProvider>
  );
}

export default App;

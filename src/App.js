import React, { Fragment, useState } from "react";
import Input from "./Components/Input/Input";

function App() {
  const [openModal, setOpenModal]=useState(false)

  const showModal =()=>{
    setOpenModal(true)
  }

  const hideModal =()=>{
    setOpenModal(false)
  }

  return (
    <Fragment>
     <h1>BookMark Website</h1>                                                                                                                  
    {openModal && <Input onHideModal={hideModal}/>}
     <button onClick={showModal}>Add Bookmark</button>
    </Fragment>
  );
}

export default App;

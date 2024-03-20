import React, { useContext, useEffect, useRef, useState } from 'react'
import Modal from '../UI/Modal'
import BookmarkContext from '../Store/bookmark-context'

const Input = (props) => {

  const nameRef = useRef()
  const urlRef = useRef()
  const bookmarkCtx = useContext(BookmarkContext)
  // console.log(bookmarkCtx)
  const [formData, setFormData] = useState({name:'', url:''})

  const hasItem = bookmarkCtx.editBookMarks.length > 0;

  useEffect(()=>{
      bookmarkCtx.editBookMarks.map((ele)=>  setFormData({name:ele.name, url:ele.url}) )
  },[])

  console.log(formData)

  const SubmitDataHandler =(event)=>{
    event.preventDefault()
      const updatedData={
        name: nameRef.current.value,
        url:urlRef.current.value,
        id:Math.random().toString()
      }
      bookmarkCtx.addBookmark(updatedData)
      bookmarkCtx.clearEditBookmarks()
      props.onHideModal()
      console.log(updatedData)
      
      nameRef.current.value=''
      urlRef.current.value=''

      setFormData({name:'', url:''})
  }
 
  return (
    <Modal onClick={props.onHideModal}>
      <form onSubmit={SubmitDataHandler}>
          <label>BookMark Name</label>
          <input type='text' placeholder='name of Bookmark' ref={nameRef} defaultValue={formData.name || ''}/>
          <label >BookMark Link</label>
          <input type='url' placeholder='enter url' ref={urlRef} defaultValue={formData.url || ''}/>   
          {hasItem ?<button>UpdateBookmark</button>: <button>AddBookmark</button>}  
      </form>
    </Modal>
  )
}

export default Input
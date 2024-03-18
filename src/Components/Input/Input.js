import React, { useRef } from 'react'
import Modal from '../UI/Modal'

const Input = (props) => {

  const nameRef = useRef()
  const urlRef = useRef()

  const SubmitDataHandler =(event)=>{
    event.preventDefault()
      const updatedData={
        name: nameRef.current.value,
        url:urlRef.current.value
      }
      
      props.onHideModal()
      console.log(updatedData)
  }

  return (
    <Modal onClick={props.onHideModal}>
      <form onSubmit={SubmitDataHandler}>
          <lable htmlfor='#'>BookMark Name</lable>
          <input type='text' placeholder='name of Bookmark' ref={nameRef}/>
          <label htmlFor='#'>BookMark Link</label>
          <input type='url' placeholder='enter url' ref={urlRef}/>   
          <button>Add Bookmark</button>   
      </form>
    </Modal>
  )
}

export default Input

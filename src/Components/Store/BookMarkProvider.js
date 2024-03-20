import React, { useEffect, useReducer } from 'react'
import BookMarkContext from './bookmark-context'

const defaultState ={
    bookmarks:[],
    editBookMarks:[]
}

const BookMarkReducer = (state, action)=>{
      if(action.type === 'ADD'){
        console.log('ADD',action,'EXISTING',state)  
        return {
          ...state,
          bookmarks:[...state.bookmarks, action.item]
        };
      } else if(action.type === 'SET'){
        return {
          ...state,
          bookmarks: action.bookmarks
        };
      }  
      if(action.type === 'EDIT'){
          // console.log('DATA GET Edited Item', action.item);
          // console.log('when EDIT Item', state.bookmarks)
          const updatedBookmarks = state.bookmarks.map(bookmark =>
            bookmark.id === action.item.id ? action.item : bookmark
          );
          const updatedFilterData = state.bookmarks.filter((ele)=>ele.id === action.item.id)
          
          console.log('when reduer work updatedBookmarks', updatedBookmarks, updatedFilterData)
          return {
            ...state,
            bookmarks: updatedBookmarks,
            editBookMarks:updatedFilterData
          };
      }else if(action.type === 'CLEAR'){
        return{
          ...state,
          editBookMarks:[]
        }
      }
      if(action.type === 'REMOVE'){
        console.log(' DElETE ACTION',action)
        // console.log('ast',state)
        const deleteFiletred = state.bookmarks.filter((item) => item.id !== action.id)
        localStorage.setItem('bookmarks',JSON.stringify(deleteFiletred))
        // console.log('DELETE',deleteFiletred)
        return{
          ...state,
          bookmarks: deleteFiletred,
        }
      }
      return state;
};


const BookMarkProvider = (props) => {
console.log('COMPONENT RE-EVALUATE')
  const [bookmarkState, dispatchMarkAction] = useReducer(BookMarkReducer,defaultState)
  // console.log('BOOKMARKSSTATE',bookmarkState)
    const updateBookMark=(item)=>{
      // console.log('===',item)
        // console.log('updated');
        dispatchMarkAction({ type: 'ADD', item: item });
        localStorage.setItem('bookmarks', JSON.stringify([...bookmarkState.bookmarks, item]));
    }

    const editBookmarkHandle =(item)=>{
        dispatchMarkAction({ type: 'EDIT', item:item });
        // console.log('editedbookmark', item);
        removeBookMark(item.id)
    }

  

      useEffect(()=>{
        let storedData = JSON.parse(localStorage.getItem('bookmarks'))
        if(storedData){
          dispatchMarkAction({type:'SET', bookmarks:storedData})
        }
      },[])
    
    
    const removeBookMark=(id)=>{
    
     dispatchMarkAction({type:'REMOVE', id:id})

    }

    const clearEditBookmarksHandler = () => {
      dispatchMarkAction({type:'CLEAR', item:[]})
    };

    const bookMarkContext = {
        bookmarks:bookmarkState.bookmarks,
        editBookMarks:bookmarkState.editBookMarks,
        addBookmark:updateBookMark ,
        removeBookmark: removeBookMark,
        editBookmark:editBookmarkHandle,
        clearEditBookmarks:clearEditBookmarksHandler,
    }
    
return (
    <BookMarkContext.Provider value={bookMarkContext}>
      {props.children}
    </BookMarkContext.Provider>
  )
}

export default BookMarkProvider

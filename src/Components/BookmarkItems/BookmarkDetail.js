import React, { useContext } from 'react';
import BookmarkContext from '../Store/bookmark-context';

const BookmarkDetail = (props) => {
    const bookmarkCtx = useContext(BookmarkContext);
        // console.log('localstore data',bookmarkCtx.bookmarks)

    const onEditHandler =(editedbookmark)=>{
        const editedbookmarks = bookmarkCtx.bookmarks.find((bookmark)=> editedbookmark.id  === bookmark.id)
        // console.log('EDITED BOOKMARKS',editedbookmark)
        if (editedbookmarks) {
            bookmarkCtx.editBookmark(editedbookmarks);
        }
        props.onShowmodal()
    }

    const DeleteHandler = (id)=>{
        // console.log('latest DELETED ID', id)
        bookmarkCtx.removeBookmark(id)
    }

    const bookmarksList = bookmarkCtx.bookmarks.map(bookmark => (
        <li key={bookmark.id}> 
            <div>
                Name: {bookmark.name}
            <a href={bookmark.url}>{bookmark.url}</a>
            <button onClick={onEditHandler.bind(null,bookmark)}>
                Edit
            </button>
            <button onClick={DeleteHandler.bind(null, bookmark.id)}>
                Delete
            </button>
            </div>
        </li>
    ));

    return (
        <section>
            <h1>Bookmark Details</h1>
            <ul>
                {bookmarksList}
            </ul>
        </section>
    );
}

export default BookmarkDetail;

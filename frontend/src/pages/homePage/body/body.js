import './body.css';
import Cards from '../../../components/card/card'
import { useHomePageBody } from './homePageBodyHelper';

const Sec1Home = () => {
  const { author,book }=useHomePageBody()

  return (
      <div className="books">
        <div className="books-top-text">
          <p>List of Authors and Books</p>
        </div>
        {
          author.map((val)=>{
            return (
              <div className='list-of-books'>
                <div className="books-mid-text">
                  <p className='author-name'>{val.name}</p>
                  <div className='add-book'>
                    <p>Add New Book by Author</p>
                    <button className='add-book-btn' onClick={val.onClickAdd}>Add</button>
                  </div>
                </div>
                  <p className='biography'>Biography : {val.biography}</p>
                <div className='author-btns'>
                  <button className='author-btn' onClick={val.onClickEdit}>Edit Author</button>
                  <button className='author-btn' onClick={val.onClickDelete}>Delete Author</button>
                </div>
                <div className='list-of-cards'>
                  {book[val.name]&&
                    book[val.name].map((book)=>
                      <Cards 
                        title={book.title} 
                        publisher={book.publisher} 
                        year={book.year} 
                        onClickDelete={book.onClickDelete} 
                        onClickEdit={book.onClickEdit}
                      />
                    )}
                </div>
              </div>
            )
          })
        }
      </div>
  );
};

export default Sec1Home;

import AuthorBody from './authorForm/body/body';
import AuthorHeader from './authorForm/header/header';
import BookBody from './bookForm/body/body';
import BookHeader from './bookForm/header/header';
import './bodyForm.css';
import './headerForm.css';
import { useLocation } from 'react-router-dom';


const Form = () => {
  const { state } = useLocation();
  const {authorForm,bookIndex,title,publisher,year,authorId,biography,authorIndex,currentAuthor,authors} = state
  return (
    <>
      {
        authorForm ?
          (
            <>
              <AuthorHeader/>
              <AuthorBody authorIndex={authorIndex} name={currentAuthor} biography={biography}/>
            </>
          )
        :
          (
            <>
              <BookHeader/>
              <BookBody bookIndex={bookIndex} title={title} publisher={publisher} year={year} authorId={authorId} currentAuthor={currentAuthor} authors={authors}/>
            </>
          )
      }
    </>
  );
};

export default Form;

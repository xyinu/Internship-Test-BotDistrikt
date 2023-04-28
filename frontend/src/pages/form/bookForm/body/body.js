import { useState } from 'react';
import { useBookFormBody } from './bookFormHelper';

const FormPart1 = ({ bookIndex, title, publisher, year,currentAuthor,authors }) => {
  const {handleSubmit}=useBookFormBody()
  const [titleState,setTitleState]=useState(title)
  const [publisherState,setPublisherState]=useState(publisher)
  const [yearState,setYearState]=useState(year)
  const [authorState,setAuthorState]=useState(currentAuthor)
  console.log(title)

  return (
    <body className="part-1">
      <form onSubmit={()=>handleSubmit({id:bookIndex,title:titleState,publisher:publisherState,year:yearState,author:authorState})}>
        <div className="form-input">
          <p className='main-text'>Author</p>
          <p className='sub-text'>Choose your author</p>
          <select className="input-select" value={authorState} onChange={(event)=>setAuthorState(event.target.value)}>
            {
              authors.map((val)=>{
                return <option value={val.name}>{val.name}</option>
              })
            }

          </select>
        </div>
        <div className="form-input">
          <p className='main-text'>Books Title</p>
          <p style={{ opacity: 0.9, marginBottom: 14 }}>
            Input the books title
          </p>
          <input className="input" placeholder="Harry Potter" value={titleState} onChange={(event)=>setTitleState(event.target.value)}/>
        </div>
        <div className="form-input">
          <p className='main-text'>Publisher Name</p>
          <p style={{ opacity: 0.9, marginBottom: 14 }}>
            Input the publisher name
          </p>
          <input className="input" placeholder="Bloomsbury" value={publisherState} onChange={(event)=>setPublisherState(event.target.value)}/>
        </div>
        <div className="form-input">
        <div>
              <p className='main-text'>Year</p>
              <p style={{ opacity: 0.9, marginBottom: 14 }}>
            Year of release
          </p>
              <input className="input" type="number" placeholder="1999" value={yearState} onChange={(event)=>setYearState(parseInt(event.target.value))}/>
            </div>
        </div>
        <input type="submit" className='submit'/>
      </form>
    </body>
  );
};

export default FormPart1;

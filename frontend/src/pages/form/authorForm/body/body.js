import { useState } from 'react';
import { useAuthorForm } from './authorFormHelper';

const FormPart1 = ({authorIndex,name,biography}) => {
  const {handleSubmit}= useAuthorForm()
  const [nameState,setNameState]=useState(name)
  const [biographyState,setBiographyState]=useState(biography)

  return (
    <body className="part-1">
      <form onSubmit={()=>handleSubmit({id:authorIndex,name:nameState,biography:biographyState})}>
        <div className="form-input">
          <p className='main-text'>Authors Name</p>
          <p className='sub-text'>Name</p>
          <input className="input" placeholder="Type the Authors Name ..." value={nameState} onChange={(event)=>setNameState(event.target.value)}/>
        </div>
        <div className="form-input">
          <p className='main-text'>Biography</p>
          <p className='sub-text'>
            Describe your author's biography in a few sentences.
          </p>
          <textarea className="input-area" placeholder="Type your Summary..." value={biographyState} onChange={(event)=>setBiographyState(event.target.value)}/>
        </div>
        <input type="submit" className='submit'/>
      </form>
    </body>
  );
};

export default FormPart1;

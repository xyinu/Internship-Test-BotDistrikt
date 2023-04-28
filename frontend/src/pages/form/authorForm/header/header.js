import NavBar from '../../../../components/navBar/navBar';

const TopForm = () => {
  return (
    <body className="form-container">
      <NavBar />
      <p className="form-top-text">Add Your Favourite Author</p>
      <p className='form-btm-text'>
        Save your favourite authors to your library<br/>
        So that you can add your favourite books from them
      </p>
    </body>
  );
};

export default TopForm;

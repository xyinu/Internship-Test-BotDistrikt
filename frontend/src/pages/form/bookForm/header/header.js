import NavBar from '../../../../components/navBar/navBar';


const TopForm = () => {
  return (
    <body className="form-container">
      <NavBar />
      <p className="form-top-text">Add Your Favourite Book</p>
      <p className='form-btm-text'>
        Save your favorite book to your library so that you never forget<br/>
        Your favorite book is more than just a story - it's a part of who you are.
      </p>
    </body>
  );
};

export default TopForm;

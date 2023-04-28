import NavBar from '../../../components/navBar/navBar';
import './header.css';

const TopHome = () => {
  return (
    <body className="home-container">
      <NavBar />
      <p className="home-top-text">
        View Your Favourite Books
      </p>
      <p className="home-btm-text">
      Welcome to your library<br/> 
      Where you can easily view and add your favorite books from anywhere, at any time!<br/>
      Save your favorite books for future reference, so you'll never lose track of your most treasured reads
      </p>
    </body>
  );
};

export default TopHome;

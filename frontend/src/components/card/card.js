import './card.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cards = ({title,publisher,year,onClickDelete,onClickEdit}) => {
    return (
            <Card className='card-container'>
                <Card.Body className='card-body'>
                <div className='card-top-section'>
                    <Card.Title className='card-title'>
                        TITLE : <br/>{title}
                    </Card.Title>
                </div>
                    <Card.Text className='publish-text'>
                        published by {publisher} <br/>
                        published on {year}
                    </Card.Text>
                    <div className='book-btns'>
                        <button className="book-btn" onClick={onClickEdit}>Edit</button>
                        <button className="book-btn" onClick={onClickDelete}>Delete</button>
                    </div>
                </Card.Body>
            </Card>
    )
}

export default Cards
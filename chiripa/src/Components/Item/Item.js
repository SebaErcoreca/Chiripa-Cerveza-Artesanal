import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const Item = ({ item }) => {

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={item.imgSrc} alt={item.title} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>

          <Card.Text>Alcohol - {item.alcohol}</Card.Text>
          <Card.Text>IBU - {item.ibu}</Card.Text>

          <div className='text-end p-2'>
            <Card.Title>$ {item.price}</Card.Title>
            <Link to={`/item/${item.id}`}>
              <Button variant='secondary'>Detalle</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
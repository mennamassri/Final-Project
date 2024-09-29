import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ReorderIcon from '@mui/icons-material/Reorder';
import Categories from '../../Categories/CategoriesList';
function Offcanvastool() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
     <ReorderIcon style={{color:"white"}}/><span className="blod">All</span>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>  <h3 className='p-2 m-2 '>Hello, sign in</h3></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        
      <Categories/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Offcanvastool;
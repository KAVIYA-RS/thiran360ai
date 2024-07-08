import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Button, Modal,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './About';
import Terms from './Terms';

function Home() {
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleCloseAboutModal = () => setShowAboutModal(false);
  const handleShowAboutModal = () => setShowAboutModal(true);

  const handleCloseTermsModal = () => setShowTermsModal(false);
  const handleShowTermsModal = () => setShowTermsModal(true);

  return (
    <div className="App homepage">
      <header className="App-header">
        <h1>Thiran360AI</h1>
        <div className="button-group">
          <Button variant="primary" onClick={handleShowAboutModal}>About Us</Button>
          <Button variant="secondary" onClick={handleShowTermsModal}>Terms and Conditions</Button>
        </div>
      </header>

      <Modal show={showAboutModal} onHide={handleCloseAboutModal} dialogClassName="custom-modal" size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>About Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <About />
        </Modal.Body>
      </Modal>

      <Modal show={showTermsModal} onHide={handleCloseTermsModal} dialogClassName="custom-modal" size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Terms />
        </Modal.Body>
        <Modal.Footer>
        <Form.Group controlId="acceptTermsCheckbox">
          <Form.Check type="checkbox" label="I read and accept the terms and conditions" />
        </Form.Group>
        <Button variant="secondary" onClick={handleCloseTermsModal}>
          Close
        </Button>
        <Button variant="primary">
          Save Changes
        </Button>
      </Modal.Footer>
      </Modal>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

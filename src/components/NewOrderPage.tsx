import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOrder } from '../redux/actions';
import '../styles/NewOrder.css';

const NewOrderPage: React.FC = () => {
  const [id, setId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addOrder({
      id,
      firstName,
      lastName,
      description,
      quantity: parseInt(quantity),
    }));

    setId('');
    setFirstName('');
    setLastName('');
    setDescription('');
    setQuantity('');
  };

  return (
    <div className="form-container">
      <h2>Add New Order</h2>
      <div className="form-group">
        <label htmlFor="orderId">Order Id:</label>
        <input
          id="orderId"
          type="text"
          value={id}
          onChange={e => setId(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="orderDescription">Order Description:</label>
        <input
          id="orderDescription"
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          type="number"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />
      </div>
      <button
        className="submit-btn"
        onClick={handleSubmit}
        aria-label="Submit"
      >
        Submit
      </button>
    </div>
  );
};

export default NewOrderPage;

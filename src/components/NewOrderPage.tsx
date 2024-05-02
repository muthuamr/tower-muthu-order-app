import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOrder } from '../redux/actions';
import '../styles/NewOrder.css';
import { toast,ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import uuid from "react-uuid";

  const NewOrderPage: React.FC = () => {
  const navigate = useNavigate();

  const [id, setId] = useState(uuid);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const dispatch = useDispatch();
  
  const handleSubmit = () => {
  let numquantity=parseInt(quantity);
    
      if(!lastName)
      {
          toast.error('Last Name is required!');
          
          return;
      }
      if(!description)
      {
          toast.error('Description is required!');
          return;
      }          
      if(isNaN(numquantity))
      {
          toast.error('Quantity is required!');
          return;
      }
      if(numquantity<1 || numquantity>20)
      {
          toast.error('Quantity must be a number between 1 and 20');
          return;
      }
  
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
    navigate('/');

  };

  return (
    <div className="form-container">
      <h2>Add New Order</h2>
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          type="text"
          value={firstName}
          maxLength={20}
          onChange={e => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          type="text"
          value={lastName}
          maxLength={20}
          onChange={e => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="orderDescription">Order Description:</label>
        <input
          id="orderDescription"
          type="text"
          value={description}
          maxLength={100}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          type="number"
          value={quantity}
          minLength={1}
          maxLength={20}
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

      <ToastContainer position="top-right"></ToastContainer> 
    </div>
  );
};

export default NewOrderPage;

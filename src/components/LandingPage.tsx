import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeOrder } from '../redux/actions';
import '../styles/Landingpage.css';

const LandingPage: React.FC = () => {
  const orders = useSelector((state: RootState) => state.order.orders);
  const dispatch = useDispatch();

  const handleRemoveOrder = (id?: string) => {
    dispatch(removeOrder(id!));
  };

  return (
    <>
      <h1>List of Ordered Items</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.firstName}</td>
                <td>{order.lastName}</td>
                <td>{order.description}</td>
                <td>{order.quantity}</td>
                <td>
                  <button
                    className="secondary-button"
                    onClick={() => handleRemoveOrder(order.id)}
                    aria-label="Delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LandingPage;

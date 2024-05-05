import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import LandingPage from '../components/LandingPage';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

describe('LandingPage', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      order: {
        orders: [
          { id: '1', firstName: 'Muthu', lastName: 'Ramalingam', description: 'Test order 1', quantity: 1 },
          { id: '2', firstName: 'Daniel', lastName: '_', description: 'Test order 2', quantity: 2 }
        ]
      }
    });
  });

  it('should render the list of ordered items', () => {
    const { getByText } = render(
      <Provider store={store}>
        <LandingPage />
      </Provider>
    );
  
    expect(getByText('List of Ordered Items')).toBeInTheDocument();
    expect(getByText('Muthu')).toBeInTheDocument();
    expect(getByText('Daniel')).toBeInTheDocument();
    expect(getByText('Test order 1')).toBeInTheDocument();
    expect(getByText('Test order 2')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
  });

  it('should dispatch removeOrder action when delete button is clicked', () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <LandingPage />
      </Provider>
    );

    const deleteButtons = getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);

    expect(store.getActions()).toContainEqual({ type: 'REMOVE_ORDER', payload: '1' });
  });
});

import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import NewOrderPage from '../components/NewOrderPage';
import '@testing-library/jest-dom';

const mockStore = configureStore([]);

describe('NewOrderPage', () => {
  it('should render all input fields', () => {
    const store = mockStore({});

    const { getByLabelText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <NewOrderPage />
        </MemoryRouter>
      </Provider>
    );

    expect(getByLabelText('First Name:')).toBeInTheDocument();
    expect(getByLabelText('Last Name *:')).toBeInTheDocument();
    expect(getByLabelText('Order Description *:')).toBeInTheDocument();
    expect(getByLabelText('Quantity *:')).toBeInTheDocument();
  });

  it('should display error message for missing last name', () => {
    const store = mockStore({});

    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <NewOrderPage />
        </MemoryRouter>
      </Provider>
    );
    
    fireEvent.change(getByLabelText('Last Name *:'), { target: { value: '' } });
    fireEvent.click(getByText('Submit'));

    expect(getByText('Last Name is required!')).toBeInTheDocument();
  });

 it('should display error message for missing description',()=>
{
    const store =mockStore({});

    const {getByLabelText,getByText}=render(
        <Provider store={store}>
            <MemoryRouter>
                <NewOrderPage />
            </MemoryRouter>
        </Provider>
    );

    fireEvent.change(getByLabelText('Order Description *:'),{target:{value:''}});
    fireEvent.click(getByText('Submit'));

    expect(getByText('Description is required!')).toBeInTheDocument();
});

it("should display error message for invalid quantity",()=>{

    const store=mockStore({});

    const {getByLabelText,getByText}=render(
        <Provider store={store}>
            <MemoryRouter>
                <NewOrderPage></NewOrderPage>
            </MemoryRouter>
        </Provider>
    );

    fireEvent.change(getByLabelText('Quantity *:'),{target:{value:''}});
    fireEvent.click(getByText('Submit'));

    expect(getByText('Quantity is required!')).toBeInTheDocument;
});

it('should display error message for quantity out of range',()=>{
    const store=mockStore({});

    const {getByLabelText,getByText}=render(
        <Provider store={store}>
            <MemoryRouter>
                <NewOrderPage></NewOrderPage>
            </MemoryRouter>
        </Provider>
    );

    fireEvent.change(getByLabelText('Quantity *:'),{target:{value:50}});
    fireEvent.click(getByText('Submit'));

    expect(getByText('Quantity must be a number between 1 and 20')).toBeInTheDocument;
    
});
});
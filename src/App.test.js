import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';

import App from './App';

afterEach(cleanup);

it('should not be able to click on disabled submit button', () => {
  const props = {
    loading: true,
  };
  const wrapper = render(<App {...props} />);
  const submitButtonElm = wrapper.getByTestId('submit-btn');
  const handleClick = jest.fn();

  console.log('hello', submitButtonElm.disabled); // true
  submitButtonElm.addEventListener('click', handleClick, false);
  fireEvent.click(submitButtonElm);

  expect(handleClick).not.toHaveBeenCalled();
});

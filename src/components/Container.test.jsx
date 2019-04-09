import React from 'react';
import * as rtl from 'react-testing-library';
import Container from './Container';

afterEach(rtl.cleanup);

// const quotes = [
//   { id: '1', text: 'be mentored or be bad' },
//   { id: '2', text: 'have fun' },
//   { id: '3', text: 'use network tab' },
// ];

jest.mock('axios', () => {
  return {
    get: () => {
      return Promise.resolve({
        data: [
          { id: '1', text: 'be mentored or be bad' },
          { id: '2', text: 'have fun' },
          { id: '3', text: 'use network tab' },
        ],
      });
    },
  };
});

// 1- we need stuff from the library but the wrapper as well
// 2- remember about cleaning up after each test
// 3- prefer regular expressions to raw text
// 4- wrapper exposes different methods that look alike!!!!
//    - get will crash and burn fast if no match
//    - query will return null if no match

describe('Container', () => {
  // actual tests
  it('outputs "hello world"', () => {
    const wrapper = rtl.render(<Container />);
    expect(wrapper.getByText(/world/i));
  });

  it('does not output "loading..."', () => {
    const wrapper = rtl.render(<Container lady='gaga' />);
    expect(wrapper.queryByText(/loading/i)).toBeFalsy();
  });
});

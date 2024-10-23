// Home.test.js
const { configure } = require('enzyme');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

// Set up Enzyme
configure({ adapter: new Adapter() });

describe('Home Component', () => {
  it('renders correctly', () => {
    // Your test code here
    expect(true).toBe(true); // Placeholder test
  });
});

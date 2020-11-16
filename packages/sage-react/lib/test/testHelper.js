import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import clientInfoStub from './stubs/clientInfoStub';
import jQueryMock from './mocks/jQueryMock';

Enzyme.configure({ adapter: new Adapter() });


// this handles warning messages issued from popperjs (a bootstrap dependency)
if (global.document) {
  document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document,
    },
  });
}

global.CLIENT_INFO = clientInfoStub;
global.$ = jQueryMock;

const globalWatchKeys = ['CLIENT_INFO'];
const globalWatchCache = {};

beforeAll(() => {
  globalWatchKeys.forEach((key) => {
    globalWatchCache[key] = global[key];
  });
});

afterEach(() => {
  globalWatchKeys.forEach((key) => {
    global[key] = globalWatchCache[key];
  });
});

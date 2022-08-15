import '@testing-library/jest-dom';

import clientInfoStub from './stubs/clientInfoStub';
import jQueryMock from './mocks/jQueryMock';

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

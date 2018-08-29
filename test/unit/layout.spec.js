const testHelper = require('../helpers/test-helper');

describe('Layout', function () {
  testHelper.setupBefore();

  it('renders as expected with all options', (done) => {
    testHelper.shunterTest('../layout', 'layout', 'components', done);
  });
});

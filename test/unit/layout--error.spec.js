const testHelper = require('../helpers/test-helper');

describe('Error pages', function () {
  testHelper.setupBefore()

  it('renders as expected with all options', (done) => {
    testHelper.shunterTest('../layout--error', 'layout--error', 'components', done);
  });
});

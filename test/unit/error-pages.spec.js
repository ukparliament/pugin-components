const testHelper = require('../helpers/test-helper');

describe('Error pages', function () {
  testHelper.setupBefore()

  it('404 page', (done) => {
    testHelper.shunterTest('../layout-error-404', 'layout-error-404', 'components', done);
  });

  it('500 page', (done) => {
    testHelper.shunterTest('../layout-error-500', 'layout-error-500', 'components', done);
  });

  it('502 page', (done) => {
    testHelper.shunterTest('../layout-error-502', 'layout-error-502', 'components', done);
  });
});

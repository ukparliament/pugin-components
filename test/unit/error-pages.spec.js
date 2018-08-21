const testHelper = require('../helpers/test-helper');

describe('Error pages', function () {
  testHelper.setupBefore()

  it('404 page', (done) => {
    testHelper.shunterTest('../404-page', 'layout-error-404', 'components', done);
  });

  it('500 page', (done) => {
    testHelper.shunterTest('../500-page', 'layout-error-500', 'components', done);
  });

  it('502 page', (done) => {
    testHelper.shunterTest('../502-page', 'layout-error-502', 'components', done);
  });
});

const testHelper = require('../../../helpers/test-helper');

describe('Figure dust component', function() {
  testHelper.setupBefore()

  it('when given everything should return html from the dust component', function(done) {
    testHelper.shunterTest('figure-all', 'components__partials__figure', 'components/partials', done)
  });

  it('when not given an aria and tab index it should return html from the dust component', function(done) {
    testHelper.shunterTest('figure-no-aria-index', 'components__partials__figure', 'components/partials', done)
  });

  it('when given only img it should return html from the dust component', function(done) {
    testHelper.shunterTest('figure-img-only', 'components__partials__figure', 'components/partials', done)
  });

  it('when not given a figcaption it should return html from the dust component', function(done) {
    testHelper.shunterTest('figure-no-figcap', 'components__partials__figure', 'components/partials', done)
  });

});

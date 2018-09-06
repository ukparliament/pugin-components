const testHelper = require('../../../helpers/test-helper');

describe('Head data alternates dust component', function() {
    testHelper.setupBefore();

    it('should return html from the dust component', function(done) {
        testHelper.shunterTest('data-alternates', 'components__head__data-alternates', 'components/head', done)
    });
});

const testHelper = require('../../../helpers/test-helper');

describe('Head open-graph dust component', function() {
    testHelper.setupBefore();

    it('should return html from the dust component', function(done) {
        testHelper.shunterTest('opengraph', 'components__head__open-graph', 'components/head', done)
    });
});

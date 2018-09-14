'use strict';

const i18next = require('i18next');

i18next.init(require('../config/i18next'));

module.exports = initHelper;
/**
* This helper allows dust to work with the i18next internationalization package.
* It passes in parameters which are accessable through the params object, the dust helper then takes in those parameters as its own.
*/
function initHelper(dust, renderer, config) {
	dust.helpers.t = function (chunk, ctx, bodies, params) {
		let key = dust.helpers.tap(params.key, chunk, ctx)

		let data = dust.helpers.tap(params.data, chunk, ctx)
		data = data ? data : {};

		return chunk.write(i18next.t(key, data))
	};
}

.PHONY: test

test:
	npm test && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js

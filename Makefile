.PHONY: test checkout_to_release deploy_to_release

# Github variables
GITHUB_API=https://api.github.com
ORG=ukparliament
REPO=pugin-components
LATEST_REL=$(GITHUB_API)/repos/$(ORG)/$(REPO)/releases
REL_TAG=$(shell curl -s $(LATEST_REL) | jq -r '.[0].tag_name')

test:
	npm test && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js


checkout_to_release:
	git checkout -b release $(REL_TAG)

deploy_to_release: 
	npm test
	npm publish

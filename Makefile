.PHONY: test checkout_to_release deploy_to_release

# Pugin variables
PUGIN=$(NODE_MODULES)/parliamentuk-pugin
JAVASCRIPTS_LOC=$(PUGIN)/src/javascripts
STYLESHEETS_LOC=$(PUGIN)/src/stylesheets

# Node module variables
LEAFLET=$(NODE_MODULES)/leaflet/dist/leaflet.js
LEAFLET_FULLSCREEN=$(PUGIN)/$(NODE_MODULES)/leaflet.fullscreen/Control.FullScreen.js
MOCHA=$(NODE_MODULES)/.bin/mocha
NODE_MODULES=./node_modules
NODE_SASS=$(NODE_MODULES)/.bin/node-sass
POSTCSS=$(NODE_MODULES)/.bin/postcss
UGLIFY_JS=$(NODE_MODULES)/.bin/uglifyjs

# Github variables
GITHUB_API=https://api.github.com
ORG=ukparliament
REPO=pugin-components
LATEST_REL=$(GITHUB_API)/repos/$(ORG)/$(REPO)/releases
REL_TAG=$(shell curl -s $(LATEST_REL) | jq -r '.[0].tag_name')

CONTAINER_PORT = 5500

install:
	npm install

# Installs Pugin dependencies
pugin:
	@echo installing pugin dependencies
	@make install -C $(PUGIN)

# Compiles css and javascript assets
build: pugin
	@mkdir -p resources/css resources/js
	@$(NODE_SASS) --output-style compressed -o resources/css $(STYLESHEETS_LOC)
	@$(POSTCSS) -r resources/css/* --no-map
	@$(UGLIFY_JS) $(JAVASCRIPTS_LOC)/_helpers.js $(JAVASCRIPTS_LOC)/cookie_disclaimer.js $(JAVASCRIPTS_LOC)/search.js -m -c -o resources/js/main.js

test:
	npm test && cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js

develop:
	env PORT=$(CONTAINER_PORT) ./node_modules/foreman/nf.js --procfile ProcfileForeman start

serve:
	npm run serve

json: # Run task to beautify *.json files
	./jsbeautify.sh

checkout_to_release:
	git checkout -b release $(REL_TAG)

deploy_to_release: install build
	npm test
	npm publish

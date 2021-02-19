# The shell we use
SHELL := /bin/bash

# We like colors
# From: https://coderwall.com/p/izxssa/colored-makefile-for-golang-projects
RED=`tput setaf 1`
GREEN=`tput setaf 2`
RESET=`tput sgr0`
YELLOW=`tput setaf 3`

# Vars
#VERSION=`awk -F\" '/"version":/ {print $4}' package.json`
VERSION := $(shell grep 'version' package.json | cut -d '"' -f4 | tr -d '[[:space:]]')
# Add the following 'help' target to your Makefile
# And add help text after each target name starting with '\#\#'
.PHONY: help
help: ## This help message
	@echo -e "$$(grep -hE '^\S+:.*##' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' -e 's/^\(.\+\):\(.*\)/\\x1b[36m\1\\x1b[m:\2/' | column -c2 -t -s :)"

.PHONY: package
package: ## Builing extension package
	vsce package

.PHONY: publish
publish: ## Publish package to Marketplace
	vsce publish

.PHONY: version-bump
version-bump: ## Update version
	npx version-bump-prompt

.PHONY: git-tag
git-tag: ## Git tag the commit with version number
	@git tag -a $(VERSION) -m "Release" || true

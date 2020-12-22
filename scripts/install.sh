#!/bin/bash

# About:
# Bash script to install all extensions used
# for https://github.com/ocular-d/writing-extension-pack.
#
# ONLY tested on macOS and Ubuntu

set -euo pipefail

# Vars
# Colors
ESC_SEQ="\x1b["
COL_RESET=$ESC_SEQ"39;49;00m"
COL_YELLOW=$ESC_SEQ"33;01m"
#COL_RED=$ESC_SEQ"31;01m"
#COL_GREEN=$ESC_SEQ"32;01m"

EXTENSIONS=(
    "ocular-d.vuepress-snippets" \
    "ocular-d.writing" \
    "ybaumes.highlight-trailing-white-spaces" \
    "oderwat.indent-rainbow" \
    "CoenraadS.bracket-pair-colorizer-2" \
    "vale.vale-vscode" \
    "bierner.markdown-emoji" \
    "tlahmann.alex-linter" \
    "jemcclin.readabilitycheck" \
    "pnp.polacode" \
    "kirozen.wordcounter" \
    "silvenon.mdx" \
    "vincaslt.highlight-matching-tag" \
    "drewbourne.vscode-remark-lint" \
    "eamodio.gitlens" \
    "redhat.vscode-yaml" \
    "tht13.rst-vscode" \
    "streetsidesoftware.code-spell-checker"
)

vscode-ocld () {
	code --extensions-dir ~/.code_profiles/ocl/exts --user-data-dir ~/.code_profiles/ocl/data
}

echo -en "$COL_YELLOW Installing extensions$COL_RESET\n"

for EXTENSION in "${EXTENSIONS[@]}"
do
    #echo "Installing $EXTENSION"
    vscode-ocld --install-extension $EXTENSION
done

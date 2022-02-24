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
  "pnp.polacode" \
  "bierner.markdown-emoji" \
  "AlanWalk.markdown-toc" \
  "streetsidesoftware.code-spell-checker" \
  "ms-vscode.wordcount" \
  "ybaumes.highlight-trailing-white-spaces" \
  "mrmlnc.vscode-remark" \
  "johnpapa.read-time" \
  "vincaslt.highlight-matching-tag" \
  "pkief.material-icon-theme" \
  "Hyzeta.vscode-theme-github-light" \
  "eamodio.gitlens" \
  "drewbourne.vscode-remark-lint" \
  "oderwat.indent-rainbow" \
  "testthedocs.vale" \
  "jhartell.vscode-line-endings" \
  "42Crunch.vscode-openapi" \
  "Shan.code-settings-sync"\
  "sdras.night-owl"
)

echo -en "$COL_YELLOW Installing extensions$COL_RESET\n"

for EXTENSION in "${EXTENSIONS[@]}"
do
    echo "Installing $EXTENSION"
done

#!/usr/bin/env bash

# Exit if any command fails, or if an undeclared variable is used
set -euo pipefail

# Usage check
if [ $# -lt 1 ]; then
  echo "Usage: $0 <new-package-name>"
  exit 1
fi

new_package_name="$1"

# Ensure we are in the project root (where package.json resides).
# If the script might be run from anywhere, you'd need logic to find package.json.
if [ ! -f "package.json" ]; then
  echo "No package.json found in the current directory. Exiting."
  exit 1
fi

# Make sure jq is installed
if ! command -v jq &>/dev/null; then
  echo "jq is required but not installed. Exiting."
  exit 1
fi

# Extract the old package name from package.json
old_package_name=$(jq -r '.name' package.json)

# Gather all non-ignored files (tracked + untracked) in Git
files=$(git ls-files --cached --others --exclude-standard)

# Replace old package name with new package name in each file
for f in $files; do
  # For macOS vs. Linux differences, pick the correct sed flag
  if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' "s/$old_package_name/$new_package_name/g" "$f"
  else
    sed -i "s/$old_package_name/$new_package_name/g" "$f"
  fi
done

# Update the `name` field in package.json using jq
tmp_file=$(mktemp)
jq --arg newName "$new_package_name" '.name = $newName' package.json >"$tmp_file"
mv "$tmp_file" package.json

echo "Successfully replaced '$old_package_name' with '$new_package_name' in all non-ignored files."

#!/bin/bash

OUTPUT="./src/backend.d.ts"

dtsgen --out "$OUTPUT" --url https://tasks.api.xlvn.ru/v1/schema/
prettier --write "$OUTPUT"
eslint --fix "$OUTPUT"

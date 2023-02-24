# ESLint Base Configuration for THE ARC projects

Additional [Rules](https://eslint.org/docs/rules/) can be found on the eslint website.

Contains the ESLint configuration used for projects maintained by the THE ARC team.

## Installation

You can install ESLint using npm:

    npm install eslint --save-dev
or using yarn

    yarn add -D eslint

Then install this configuration:

    npm install @the-arc-gmbh/eslint-config --save-dev
or

    yarn add -D @the-arc-gmbh/eslint-config

## Usage

In your `package.json` file, add:

```json
{
    "extends": "@the-arc-gmbh/eslint-config", // base-config
}
```

module.exports = {
	parser: "@typescript-eslint/parser",
	extends: ["plugin:@typescript-eslint/recommended"],
	env: {
		node: true,
		es6: true
	},
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: "module"
	},
	rules: {
		"no-var": "error",
		"@typescript-eslint/indent": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-object-literal-type-assertion": "off",
		"@typescript-eslint/prefer-interface": "off",
		"@typescript-eslint/member-delimiter-style": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-non-null-assertion": "off"
	}
};

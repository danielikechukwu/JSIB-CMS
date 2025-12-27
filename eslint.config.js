// @ts-check
const eslint = require('@eslint/js');
const { defineConfig } = require('eslint/config');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const eslintConfigPrettier = require('eslint-config-prettier');
const eslintPluginPrettier = require('eslint-plugin-prettier');

module.exports = defineConfig([
  {
    files: ['**/*.ts'],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      // Disable conflicting formatting rules
      ...eslintConfigPrettier.rules,

      // Prettier formatting
      'prettier/prettier': 'error',
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/contextual-lifecycle': 'error', // Ensures that Angular lifecycle hooks are used in appropriate contexts.
      '@angular-eslint/no-async-lifecycle-method': 'error', // Disallow the use of async functions for Angular lifecycle methods.
      '@angular-eslint/no-attribute-decorator': 'error', // Disallow the use of the @Attribute decorator in Angular components and directives.
      '@angular-eslint/require-lifecycle-on-prototype': 'error', // Enforce that Angular lifecycle methods are declared on the class prototype.
      '@angular-eslint/sort-lifecycle-methods': 'error', // Enforce a consistent order for Angular lifecycle methods within a class.
      '@angular-eslint/consistent-component-styles': 'error', // Enforce a consistent style for defining Angular component styles.
      '@angular-eslint/no-duplicates-in-metadata-arrays': 'error', // Disallow duplicate entries in Angular component and directive metadata arrays.
      '@angular-eslint/no-empty-lifecycle-method': 'error', // Disallow empty Angular lifecycle methods.
      '@angular-eslint/no-lifecycle-call': 'error', // Disallow direct calls to Angular lifecycle methods.
      '@angular-eslint/prefer-inject': 'error', // Suggest using the inject function instead of constructor injection in Angular classes.
      '@angular-eslint/prefer-on-push-component-change-detection': 'error', // Suggest using OnPush change detection strategy for Angular components.
      '@angular-eslint/prefer-signal-model': 'error', // Suggest using signals for state management in Angular components and services.
      '@angular-eslint/prefer-standalone': 'error', // Suggest using standalone components, directives, and pipes in Angular applications.
      '@angular-eslint/use-component-selector': 'error', // Enforce the use of the component selector in Angular templates.
      '@angular-eslint/use-component-view-encapsulation': 'error', // Enforce the use of view encapsulation in Angular components.
      '@angular-eslint/use-injectable-provided-in': 'error', // Enforce the use of the providedIn property in Angular injectable services.
      '@angular-eslint/use-lifecycle-interface': 'error', // Enforce that classes implementing Angular lifecycle methods also implement the corresponding interfaces.
      '@angular-eslint/no-input-rename': 'error', // Disallow renaming of Angular @Input properties.
    },
  },
  {
    files: ['**/*.html'],
    plugins: {
      prettier: eslintPluginPrettier,
    },
    extends: [angular.configs.templateRecommended, angular.configs.templateAccessibility],
    rules: {
      // Disable conflicting formatting rules
      ...eslintConfigPrettier.rules,

      // Prettier formatting
      'prettier/prettier': 'error',
      '@angular-eslint/template/alt-text': 'error', // Enforce that all elements that require alternative text have meaningful information to relay back to assistive technologies.
      '@angular-eslint/template/button-has-type': 'error', // Enforce that button elements have an explicit type attribute. e.g type="button", type="submit", or type="reset".
      '@angular-eslint/template/click-events-have-key-events': 'error', // Enforce that clickable elements have at least one keyboard event listener.
      '@angular-eslint/template/label-has-associated-control': 'error', // Enforce that label elements have an associated control.
      '@angular-eslint/template/mouse-events-have-key-events': 'error', // Enforce that mouse event bindings have at least one corresponding keyboard event binding.
      '@angular-eslint/template/no-positive-tabindex': 'error',
      '@angular-eslint/template/interactive-supports-focus': 'error', // Enforce that interactive elements are focusable.
      '@angular-eslint/template/no-distracting-elements': 'error', // Disallow the use of distracting elements in Angular templates.
      '@angular-eslint/template/no-autofocus': 'error', // Disallow the use of the autofocus attribute in Angular templates.
      '@angular-eslint/template/use-track-by-function': 'error', // Enforce the use of trackBy functions in *ngFor directives in Angular templates.
      '@angular-eslint/template/no-negated-async': 'error',
      '@angular-eslint/template/banana-in-box': 'error', // Enforce the use of the "banana in a box" syntax for two-way data binding.
      '@angular-eslint/template/elements-content': 'error', // Enforce that elements with content restrictions have valid content.
      '@angular-eslint/template/eqeqeq': 'error', // Enforce the use of === and !== in Angular template expressions.
      '@angular-eslint/template/no-any': 'error', // Disallow the use of the any type in Angular templates.
      '@angular-eslint/template/no-empty-control-flow': 'error', // Disallow empty control flow statements in Angular templates.
      '@angular-eslint/template/no-interpolation-in-attributes': 'error', // Disallow interpolation in Angular template attributes.
      '@angular-eslint/template/prefer-at-else': 'error', // Suggest using *ngIf; else instead of *ngIf with a negated condition in Angular templates.
      '@angular-eslint/template/prefer-at-empty': 'error', // Suggest using *ngIf; empty instead of checking for length or emptiness in Angular templates.
      '@angular-eslint/template/prefer-contextual-for-variables': 'error', // Suggest using contextual variables in *ngFor directives in Angular templates.
      '@angular-eslint/template/prefer-control-flow': 'error', // Suggest using Angular control flow directives instead of alternative approaches in templates.
      '@angular-eslint/template/prefer-ngsrc': 'error', // Suggest using the NgSrc directive instead of binding to the src attribute directly in Angular templates.
      '@angular-eslint/template/prefer-template-literal': 'error', // Suggest using template literals instead of string concatenation in Angular templates.
      '@angular-eslint/template/table-scope': 'error', // Enforce the use of scope attributes on table header cells in Angular templates.
      '@angular-eslint/template/prefer-self-closing-tags': 'error', // Suggest using self-closing tags for elements without content in Angular templates.
      '@angular-eslint/template/role-has-required-aria': 'error',
      '@angular-eslint/template/valid-aria': 'error', // Enforce that ARIA attributes are valid for their roles in Angular templates.
    },
  },
]);

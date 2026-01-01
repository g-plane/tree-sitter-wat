/**
 * @file Wat grammar for tree-sitter
 * @author Pig Fang <g-plane@hotmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

export default grammar({
  name: 'wat',

  rules: {
    source_file: $ => repeat($.module),
    module: $ => seq('(', 'module', ')'),
  },

  extras: $ => [/\s/],
})

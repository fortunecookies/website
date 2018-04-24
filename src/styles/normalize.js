import { css } from 'styled-components'

export default css`
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  [hidden],
  template {
    display: none;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
  }

  a:active,
  a:hover,
  a:focus {
    outline: 0;
  }

  abbr[title] {
    border-bottom: 1px dotted;
  }

  b,
  strong {
    font-weight: bold;
  }

  dfn {
    font-style: italic;
  }

  h1 {
    font-size: 2em;
    margin: 0.35em 0;
  }

  small {
    font-size: 0.85em;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sup {
    top: -0.5em;
  }

  sub {
    bottom: -0.25em;
  }

  img {
    border: 0;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  figure {
    margin: 1em 40px;
  }

  hr {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    height: 0;
  }

  pre {
    overflow: auto;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font: inherit;
    margin: 0;
  }

  button {
    background: none;
    margin: 0;
    padding: 0;
    border: 0;
    cursor: pointer;
    color: inherit;
    font-size: inherit;
    line-height: inherit;
    outline: 0;
    border-radius: 0;
    letter-spacing: inherit;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    -webkit-appearance: button;
    cursor: pointer;
  }

  button[disabled],
  html input[disabled] {
    cursor: default;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  input {
    line-height: normal;
  }

  input[type='checkbox'],
  input[type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  input[type='search'] {
    -webkit-appearance: textfield;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }

  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  legend {
    border: 0;
    padding: 0;
  }

  textarea {
    overflow: auto;
  }

  optgroup {
    font-weight: bold;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
  }

  input,
  select,
  textarea {
    color: inherit;
    font: inherit;
    line-height: normal;
    background-color: transparent;
    outline: 0;
    border: 0;
    border-radius: 0;
    -webkit-font-smoothing: subpixel-antialiased; // Safari transform bug
    -webkit-appearance: none;
    -moz-appearance: none;
    resize: vertical;
    padding: 0;
  }

  img {
    display: inline-block; // Get rid of gap under images
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    -ms-interpolation-mode: bicubic;
  }

  html {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol {
    position: relative;
    margin-top: 0;

    &:last-child {
      margin-bottom: 0;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`

![Postonent](https://user-images.githubusercontent.com/1507057/50406845-62927900-07cc-11e9-86dc-89a36ab0b331.png)

A simple UI library for light-weight, highly customizably Email components. Remove the pain of writing emails, by writing the templates in React, then SSR them and pass the generated HTML to the Backend to send it out.

[![npm version](https://badge.fury.io/js/postonents.svg)](https://badge.fury.io/js/postonents) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Saifadin/postonents/issues) [![blazing](https://img.shields.io/badge/Status-Blazing%20%F0%9F%94%A5-brightgreen.svg)](https://github.com/Saifadin/postonents)

## Installation

_Disclaimer: You need to be on a React version with hooks, for this to work._

To start with `postonents` install:

```
yarn add postonents
// or
npm install --save postonents
```

## Components included

Included in this package are the following components:

- **`Email`**: The Wrapper component, that generates the `<html>`, `<head>` and `<body>` tags with many customization possibilities like adding scripts and global styles.
- **`Container`**: Component to generally wrap `Row`s. By default a max of 600px wide. (for the reason why see [here](http://templates.mailchimp.com/development/html/))
- **`Row`**: Each row has 12 possible `Column`s, that wrap, if they are too big.
- **`Column`**: A Column for content separation, can be customized for `small` (<600px) and `large` (>=600px).
- **`Text`**: Component to display and style text content.
- **`Link`**: Component to display and style links (`a` tag). Can have the look of a link, a primary button and a hollow button.
- **`Image`**: Component for images. Needs a src and either height or width definition.
- **`Header`**, **`Footer`**: Two Layout Components for Layouting
- **`FullWidth`**: Basically a `Container` and a `Row`. For layouting on the top level, if different backgroundColors are wanted.
- **`PostonentsProvider`**, **`PostonentsConsumer`** and **`PostonentContext`**: Multiple possible ways to access or change the internal Context for styling components.

## Component API

All components generally have a `children`, a `className` and a `style` prop and this will be applied to the element that has the styling for easy overrides and customization

### **`Email`**

| Prop         | type   | required | description                                                                          |
| ------------ | ------ | -------- | ------------------------------------------------------------------------------------ |
| `lang`       | string | yes      | Will be added to the `html` tag                                                      |
| `title`      | string | yes      | The `title` of the email                                                             |
| `headLinks`  | string | no       | Any links in the `head` tag like fonts                                               |
| `headStyles` | string | no       | Styles in the `head` tag, will automatically be wrapped in `<styles type="text/css>` |
| `bodyStyle`  | object | no       | will be added to the styles of the `body` tag                                        |

### **`Container`**

| Prop        | type             | required             | description                                                                    |
| ----------- | ---------------- | -------------------- | ------------------------------------------------------------------------------ |
| `alignment` | string           | no                   | Pass `center` here to make sure the Container is centered and not left-aligned |
| `maxWidth`  | number \| string | no (defaults to 600) | Will set the max-width of the whole container                                  |

### **`Column`**

| Prop        | type    | required                 | description                                           |
| ----------- | ------- | ------------------------ | ----------------------------------------------------- |
| `small`     | number  | no (defaults to 12)      | The column count from 1 to 12 for screens under 600px |
| `large`     | number  | no (defaults to `small)` | The column count from 1 to 12 for screens above 600px |
| `noPadding` | boolean | no                       | Will remove the padding of the column                 |

### **`Link`**

| Prop        | type    | required                | description                          |
| ----------- | ------- | ----------------------- | ------------------------------------ |
| `href`      | string  | yes                     | Target of the link                   |
| `type`      | enum    | no (defaults to 'link') | Can be 'link', 'primary' or 'hollow' |
| `fullWidth` | boolean | no                      | Makes the Link expand to the fullest |

### **`Image`**

| Prop     | type   | required | description             |
| -------- | ------ | -------- | ----------------------- |
| `src`    | string | yes      | The source of the image |
| `height` | number | no       | The height of the image |
| `width`  | number | no       | The width of the image  |

### **`Header`**

| Prop       | type   | required | description                                                                            |
| ---------- | ------ | -------- | -------------------------------------------------------------------------------------- |
| `logo`     | string | no       | src of log, if passed will render a logo horizontally centered at the top of the email |
| `title`    | string | no       | if passed, will render the title, right under the logo.                                |
| `children` | Node   | no       | For custom styling you can pass whatever you want                                      |

## Theming

If you do not have special and custom styling purposes, the default theme will be more then enough. But if you would like some more control, this is the theme that can be overriden, by passing it as a `theme` prop to `PostonentsProvider`, that need to be the first element:

```jsx
<PostonentsProvider theme={{ ... }}>
  <Email>
    ...
  </Email>
</PostonentsProvider>
```

This is the current theme, it may be extended in the future.

```javascript
const DefaultTheme = {
  colors: {
    text: '#4c5b5c', // Txxt Color
    bodyBg: '#fafafa', // Background Color of `body`
    footerBg: '#4c5b5c', // Background Color of footer
    footerText: 'white', // Text Color of Footer
    primaryBg: '#6699cc', // Background Color of primary button
    primary: 'white', // text color of primary button
    hollow: '#4c5b5c', // text color and border color of hollow button
  },
  typo: {
    fontFamily: 'Helvetica, sans-serif', // Font family
    fontSize: '14px', // Font Size
    lineHeight: '24px', // line height
    light: 300, // definition for light font weight
    normal: 400, // definition for normal font weight
    bold: 600, // definition for bold font weight
  },
};
```

## Examples

Coming soon!

# gravatar-wc

[![npm](https://img.shields.io/npm/v/gravatar-wc.svg?style=plastic)](https://www.npmjs.com/package/gravatar-wc)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/gravatar-wc.svg?label=size&style=plastic)](https://bundlephobia.com/result?p=gravatar-wc)
![NPM](https://img.shields.io/npm/l/gravatar-wc.svg?style=plastic)

`gravatar-wc` uses the [Gravatar image request API](https://en.gravatar.com/site/implement/images/) to display an image for the specified email address. This package uses [Stencil](https://stenciljs.com/) to generate a [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) that can be used by any front end library or framework.

## Attributes

``` html
<!-- Empty component. Will use the default image. -->
<gravatar-wc></gravatar-wc>

<!-- Fully configured component. -->
<gravatar-wc
  email="first.last@mybusiness.com"
  default="identicon"
  force-default="true"
  protocol="https"
  rating="g"
  size="64"
>
</gravatar-wc>
```

| name | type | options |
| --- | --- | --- |
| email | string |  |
| default | string | 404, blank, identicon, monsterid, mp, retro, robohash, wavatar |
| force-default | boolean |  |
| protocol | string | http, https
| rating | string | g, pg, r, x |
| size | number |  |

## Integration

[Stencil Integration Docs](https://stenciljs.com/docs/overview)

### JavaScript

``` html
<gravatar-wc email="demo@demo.com"></gravatar-wc>

<script src="https://unpkg.com/gravatar-wc/dist/gravatar-wc.js"></script>
```

### React

``` ts
// index.js, index.ts

import { defineCustomElements as defineGravatar } from "gravatar-wc/dist/loader";

defineGravatar(window);
```

``` tsx
// App.jsx, App.tsx

import { Component } from "react";

// skip if using JavaScript - only needed for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "gravatar-wc": any;
    }
  }
}

export default class extends Component {
  render() {
    return <gravatar-wc email="demo@demo.com" />;
  }
}
```

### Vue

``` ts
// main.js, main.ts

import { defineCustomElements as defineGravatar } from "gravatar-wc/dist/loader";
import Vue from "vue";

defineGravatar(window);

Vue.config.ignoredElements = ["gravatar-wc"];
```

``` html
// ExampleComponent.vue

<template>
  <div>
    <gravatar-wc :email="email"></gravatar-wc>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ExampleComponent extends Vue {
  email = "demo@demo.com";
}
</script>
```

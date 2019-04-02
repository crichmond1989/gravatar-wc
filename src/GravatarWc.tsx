import { Md5 } from "ts-md5";

import { Component, Prop } from "@stencil/core";

@Component({ tag: "gravatar-wc" })
export class GravatarWc {
  @Prop() default?: string;
  @Prop() email = "";
  @Prop() forceDefault?: boolean;
  @Prop() protocol?: "http" | "https";
  @Prop() rating?: "g" | "pg" | "r" | "x";
  @Prop() size?: number;

  render() {
    const hash = this.getEmailHash();

    const scheme = this.protocol ? `${this.protocol}://` : "//";

    const params = {
      default: this.default,
      forcedefault: this.forceDefault && "y",
      rating: this.rating,
      size: this.size,
    };

    const queryString = Object.entries(params)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}=${v}`)
      .join("&");

    const src = `${scheme}gravatar.com/avatar/${hash}?${queryString}`;

    return <img src={src} alt="" />;
  }

  getEmailHash() {
    const trimmed = this.email.trim();
    const lower = trimmed.toLocaleLowerCase();

    return Md5.hashStr(lower).toString();
  }
}

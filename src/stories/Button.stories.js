import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "../components/Button";

export default {
  title: "Button",
  component: Button,
};

export const Text = () => (
  <Button onClick={action("clicked")}> Button Content</Button>
);

export const Emoji = () => (
  <Button onClick={action("clicked")}>
    {" "}
    <span role="img" aria-label="smile">
      😊
    </span>
  </Button>
);

export const CustomStyles = () => (
  <Button
    onClick={action("clicked")}
    style={{
      width: "200px",
      height: "50px",
      color: "white",
      background: "red",
      border: 0,
    }}
  >
    {" "}
    Text
  </Button>
);

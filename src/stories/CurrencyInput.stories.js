import React from "react";
import { action } from "@storybook/addon-actions";
import { CurrencyInput } from "../components/CurrencyInput";

export default {
  title: "CurrencyInput",
  component: CurrencyInput,
};

export const Text = () => (
  <CurrencyInput onClick={action("clicked")}>Hello CurrencyInput</CurrencyInput>
);

export const Emoji = () => <CurrencyInput></CurrencyInput>;

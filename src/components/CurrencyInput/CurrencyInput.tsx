import React, { useState } from "react";

export interface CurrencyInputProps {}

export const CurrencyInput: React.SFC<CurrencyInputProps> = () => {
  const [v, sv] = useState("hello");
  const handleChange = (evt: any) => sv(evt.target.value);
  return <input value={v} onChange={handleChange} />;
};

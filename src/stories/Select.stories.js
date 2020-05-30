import React, { useState } from "react";
import { action, actions } from "@storybook/addon-actions";
import { Select, Option } from "../components/Select";

export default {
  title: "Select",
  component: Select,
};

export const Uncontrolled = () => {
  const vals = ["a", "b", "c"];
  return (
    <Select>
      {vals.map((v, i) => (
        <Option key={i} value={v}>
          {v}
        </Option>
      ))}
    </Select>
  );
};

export const UncontrolledWithInitialValue = () => {
  const vals = ["a", "b", "c"];
  return (
    <Select initialValue="c">
      {vals.map((v, i) => (
        <Option key={i} value={v}>
          {v}
        </Option>
      ))}
    </Select>
  );
};

export const UncontrolledWithFormattedValue = () => {
  const vals = ["a", "b", "c"];
  return (
    <Select initialValue="c">
      {vals.map((v, i) => (
        <Option key={i} value={v}>
          {`${v.toUpperCase()}❤️`}
        </Option>
      ))}
    </Select>
  );
};

export const UncontrolledWithOptionValue = () => {
  const vals = ["a", "b", "c"];
  return (
    <>
      <Select>
        {vals.map((v, i) => (
          <Option value={v} key={i}>
            {v}
          </Option>
        ))}
      </Select>
    </>
  );
};

export const UncontrolledWithUpdateCallback = () => {
  const vals = ["a", "b", "c"];
  const logChange = (stateValue) => action("button clicked")(stateValue);
  return (
    <Select onSelect={logChange}>
      {vals.map((v, i) => (
        <Option key={i} value={v}>
          {v}
        </Option>
      ))}
    </Select>
  );
};

export const FullyControlled = () => {
  const vals = ["a", "b", "c"];
  const [state, setState] = useState(vals[0]);
  const handleChange = (evt) => setState(evt.target.value);

  return (
    <Select value={state} onChange={handleChange}>
      {vals.map((v, i) => (
        <Option key={i} value={v}>
          {v}
        </Option>
      ))}
    </Select>
  );
};

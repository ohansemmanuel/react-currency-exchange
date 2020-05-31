import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "../components";
import { AppDispatch } from "../state";
import { setPollingStopped } from "../state/polling.slice";

export const PollingStopperContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleStopPolling = () => {
    dispatch(setPollingStopped());
  };

  return (
    <Button
      onClick={handleStopPolling}
      style={{ width: "30px", height: "30px", borderRadius: "50%" }}
    >
      &times;
    </Button>
  );
};

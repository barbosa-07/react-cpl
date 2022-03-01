import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import "./styles.css";
import { Button } from "../components/Button";

const stories = storiesOf("Buttons", module);

stories.add("Default Buttton", () => {
  return <Button value={"click me"} />;
});

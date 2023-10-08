import { Radio } from "antd";

import React from "react";

interface ResponseProps {
  unit: any;
  onSetUnit: any;
}

function WeatherOptions({ unit, onSetUnit }: ResponseProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <Radio.Group
        style={{ marginTop: 32 }}
        defaultValue={unit}
        buttonStyle="solid"
        onChange={(e) => onSetUnit(e.target.value)}
      >
        <Radio value="metric">Calcius</Radio>
        <Radio value="imperial">Fahrenheit</Radio>
      </Radio.Group>
    </div>
  );
}

export default WeatherOptions;

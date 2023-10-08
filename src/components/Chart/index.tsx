import { Column } from "@ant-design/plots";

interface ResponseProps {
  values: string[];
}

const Chart = ({ values }: ResponseProps) => {
  const data = [
    {
      type: new Date().toISOString().split("T")[0],
      temp: values[0],
    },
    {
      type: new Date(new Date().setDate(new Date().getDate() + 1))
        .toISOString()
        .split("T")[0],
      temp: values[1],
    },
    {
      type: new Date(new Date().setDate(new Date().getDate() + 2))
        .toISOString()
        .split("T")[0],
      temp: values[2],
    },
    {
      type: new Date(new Date().setDate(new Date().getDate() + 3))
        .toISOString()
        .split("T")[0],
      temp: values[3],
    },
    {
      type: new Date(new Date().setDate(new Date().getDate() + 4))
        .toISOString()
        .split("T")[0],
      temp: values[4],
    },
    {
      type: new Date(new Date().setDate(new Date().getDate() + 5))
        .toISOString()
        .split("T")[0],
      temp: values[5],
    },
  ];

  const config = {
    data,
    xField: "type",
    yField: "temp",
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "类别",
      },
      sales: {
        alias: "销售额",
      },
    },
  };
  return (
    <Column
      padding={50}
      style={{ margin: "0 auto", maxWidth: "30%" }}
      {...config}
    />
  );
};

export default Chart;

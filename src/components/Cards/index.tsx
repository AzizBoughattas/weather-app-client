import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import { useState } from "react";

interface ResponseProps {
  values: string[];
  ville: string;
  unit: string;
}
const Cards = ({ values, ville, unit }: ResponseProps) => {
  const [cardSelected, setCardSelected] = useState(0);

  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <p style={{ fontWeight: "bold" }}>{ville}</p>
      <Row
        justify="center"
        gutter={16}
        style={{ margin: 32, textAlign: "center" }}
      >
        <Button
          icon={<ArrowLeftOutlined />}
          style={{ marginTop: 100, marginRight: 20 }}
          onClick={() => setCardSelected((v) => (v === 0 ? 2 : v - 1))}
          disabled={cardSelected === 0}
        />

        <Col span={6}>
          <Card
            style={{
              height: 300,
              border: cardSelected === 0 ? "2px solid #d9d9d9" : "none",
            }}
          >
            <p>
              Temp : {values[0]} {unit === "metric" ? "C" : "F"}
            </p>
            <p>Day : {new Date().toISOString().split("T")[0]}</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{
              height: 300,
              border: cardSelected === 1 ? "2px solid #d9d9d9" : "none",
            }}
          >
            <p>
              Temp : {values[1]} {unit === "metric" ? "C" : "F"}
            </p>
            <p>
              Day :{" "}
              {
                new Date(new Date().setDate(new Date().getDate() + 1))
                  .toISOString()
                  .split("T")[0]
              }
            </p>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{
              height: 300,
              border: [2, 3, 4, 5].includes(cardSelected)
                ? "2px solid #d9d9d9"
                : "none",
            }}
          >
            <p>
              Temp : {values[cardSelected > 2 ? cardSelected : 2]}{" "}
              {unit === "metric" ? "C" : "F"}
            </p>
            <p>
              Day :{" "}
              {
                new Date(
                  new Date().setDate(
                    new Date().getDate() + (cardSelected > 2 ? cardSelected : 2)
                  )
                )
                  .toISOString()
                  .split("T")[0]
              }
            </p>
          </Card>
        </Col>
        <Button
          icon={<ArrowRightOutlined />}
          style={{ marginTop: 100, marginLeft: 20, verticalAlign: "middle" }}
          onClick={() => setCardSelected((v) => (v === 5 ? 0 : v + 1))}
        />
      </Row>
    </div>
  );
};

export default Cards;

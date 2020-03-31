import React from "react";
import { motion } from "framer-motion";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";

// By default all transforms are 3d.
// You should only animate transforms and opacity
// Translate shortcuts: x, y, z
// Translate: translateX, translateY, translateZ
// Scale: scale, scaleX, scaleY
// Rotate: rotate, rotateX, rotateY, rotateZ
// Skew: skew, skewX, skewY

function App() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 100,
        y: 100
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0
      }}
      transition={{
        duration: 1
      }}
    >
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <Container>
        <h2>Super Cool</h2>
        <CardGrid>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src="https://i.ibb.co/bdyz7B4/purp.png" />
          </Card>
          <Card style={{ background: "var(--blue)" }}>
            <h3>Some card</h3>
            <img src="https://i.ibb.co/cgT1tQs/blue.png" />
          </Card>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src="https://i.ibb.co/3zhkQCw/black.png" />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src="https://i.ibb.co/Q8g6yt5/green.png" />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

export default App;

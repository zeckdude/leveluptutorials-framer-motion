import React, { useState } from "react";
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
  const [headerPosition, setHeaderPosition] = useState(0);
  const [headerFontSize, setHeaderFontSize] = useState(16);
  const [isHeaderOpacityLowered, setIsHeaderOpacityLowered] = useState(false)
  console.log('headerPosition', headerPosition);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <Container>
        <motion.h2 
          animate={{ 
            x: headerPosition,
            fontSize: headerFontSize,
            opacity: isHeaderOpacityLowered ? 0.3 : 1,
          }}
        >
          Super Cool
        </motion.h2>
        Header Position <input type="range" min="-100" max="100" value={headerPosition} onChange={e => setHeaderPosition(Number(e.target.value))} />
        <br />
        Header Font Size <input type="range" min="1" max="80" value={headerFontSize} onChange={e => setHeaderFontSize(Number(e.target.value))} />
        <br />
        <button onClick={() => setIsHeaderOpacityLowered(prevIsHeaderOpacityLowered => !prevIsHeaderOpacityLowered)}>Toggle Header Opacity</button>
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

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardGrid, Container, Header } from "./Elements";
import Modal from './Modal';
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
  const [isModalVisible, setIsModalVisible] = useState(false);

  console.log('isModalVisible', isModalVisible);

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
        <h2>Super Cool</h2>
        <button onClick={() => setIsModalVisible(prevValue => !prevValue)}>Hide/Show Modal</button> 

        <Modal isVisible={isModalVisible} onClickClose={() => setIsModalVisible(false)}>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src="https://i.ibb.co/bdyz7B4/purp.png" />
          </Card>
        </Modal>

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

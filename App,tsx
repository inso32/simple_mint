import "./App.css";
import Header from "./Header";
import Initialize from "./Initialize";
import Mint from "./Mint";
import { useState } from "react";
import { Container } from "@mui/material";
export default function App() {
  const [isConnected, setConnected] = useState(false);
 return (
  <div className="App">
   <Header
        onConnected={() => setConnected(true)}
        onDisconnected={() => setConnected(false)}
   />
      
      <Container sx={{ mt: 15 }}>
      {isConnected && <Initialize/>}
      {isConnected && <Mint/>}
      </Container>
  </div>
 );
}

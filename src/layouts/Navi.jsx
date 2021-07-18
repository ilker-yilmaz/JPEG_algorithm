import React, { useState } from "react";
import CartSummary from "./CartSummary";
import { Container, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useHistory } from "react-router-dom";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory()

  function handleSignedOut(params) {
    setIsAuthenticated(false);
    history.push("/")
  }

  function handleSignedIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            {isAuthenticated ? (
              <SignedIn signOut={handleSignedOut} bisey="1" />
            ) : (
              <SignedOut signIn={handleSignedIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

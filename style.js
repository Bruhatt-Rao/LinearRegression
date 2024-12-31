body {
  background-color: #e0e1dd;
  margin: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.info {
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  font-family: monospace;
  font-size: 2vh;
  color: #1b263b;
}

button {
  padding: 1vh;
  font-size: 2vh;
  font-family: monospace;
  margin-top: 3vh;
  background-color: #e0e1dd;
  border-color: #1b263b;
  color: #1b263b;
  border: solid;
}

@media (max-width: 1000px) {
  .main {
    flex-direction: column;
  }
  body {
    height: 85vh;
  }
}

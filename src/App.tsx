import React from 'react';
import DisassemblyComponent from './components/DisassemblyComponent';
import HexDumpComponent from './components/HexDumpComponent';
import Disassembly from './disassembler/Disassembly';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import NavBarComponent from './components/NavBar';

interface AppState {
  program?: Disassembly;
}

class App extends React.Component<{}, AppState> {
  state: AppState = {
    program: undefined
  }

  onLoadProgram(program: Disassembly) {
    this.setState({
      program
    });
  }

  render() {
    return (
      <div className="app vh-100">
        <NavBarComponent onLoadCallback={this.onLoadProgram.bind(this)} />
        <Container fluid className="mt-3">
          <Row>
            <DisassemblyComponent program={this.state.program}></DisassemblyComponent>
            <HexDumpComponent program={this.state.program}></HexDumpComponent>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

import React from "react";
import Disassembly from "../disassembler/Disassembly";
import Col from 'react-bootstrap/Col';

class DisassemblyComponent extends React.PureComponent<{ program?: Disassembly }, {}> {
  render() {
    if (this.props.program) {
      return (
        <Col xs={5} className="full-height-scrollable">
          <pre>
            {this.props.program.disassembly()}
          </pre>
        </Col>
      )
    } else {
      return (
        <Col xs={10}>
          <div>Load Assembly</div>
        </Col>
      )
    }
  }
}

export default DisassemblyComponent;
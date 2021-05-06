import React from "react";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Disassembly from "../disassembler/Disassembly";

class HexDumpComponent extends React.PureComponent<{ program?: Disassembly }, {}> {
  render() {
    if (this.props.program) {
      return (
        <Col xs={7} className="full-height-scrollable">
          <Table responsive size="sm" striped hover>
            <thead>
              <tr>
                <th></th>
                <th><code>0</code></th>
                <th><code>1</code></th>
                <th><code>2</code></th>
                <th><code>3</code></th>
                <th><code>4</code></th>
                <th><code>5</code></th>
                <th><code>6</code></th>
                <th><code>7</code></th>
                <th><code>8</code></th>
                <th><code>9</code></th>
                <th><code>A</code></th>
                <th><code>B</code></th>
                <th><code>C</code></th>
                <th><code>D</code></th>
                <th><code>E</code></th>
                <th className="f-column"><code>F</code></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.program.hexDump().map(([pc, bytes, chars]) => (
                  <tr>
                    <td><code>{pc.toString(16).padStart(4, "0")}</code></td>
                    {bytes.map(b => (
                      (<td><code>{b.toString(16).padStart(2, "0")}</code></td>)
                    ))}
                    {chars.map(c => (<td><code>{c}</code></td>))}
                  </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      )
    }

    return null;
  }
}

export default HexDumpComponent

import logo from '../logo.png';
import React from "react";
import { disassembleRom } from "../disassembler/Disassembler";
import Disassembly from "../disassembler/Disassembly";
import Form from 'react-bootstrap/Form';
import Navbar from "react-bootstrap/Navbar";
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';

interface NavBarState {
  startAddress: number;
  file: File;
}

class NavBarProps {
  onLoadCallback: (program: Disassembly) => void;

  constructor(onLoadCallback: (program: Disassembly) => void) {
    this.onLoadCallback = onLoadCallback;
  }
}

class NavBarComponent extends React.PureComponent<NavBarProps, NavBarState> {
  constructor(props: NavBarProps) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      startAddress: 0
    });
  }

  startAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      startAddress: e.currentTarget.valueAsNumber
    });
  }

  fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      file: e.currentTarget.files![0]
    })
  }

  formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    getBuffer(this.state.file).then((rawData) => {
      let disassembledCode = disassembleRom(this.state.startAddress, rawData);

      this.props.onLoadCallback(disassembledCode);
    });
  };

  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />{' '}
          8080 Disassembler
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Form onSubmit={this.formSubmit} inline>
            <FormControl type="file" onChange={this.fileChange}  className="form-control-sm text-light" />
            <FormLabel className="text-light text-small">Start Address</FormLabel>
            <FormControl type="number" placeholder="0" onChange={this.startAddressChange} className="form-control-sm" />
            <FormControl type="submit" value="Disassemble" className="form-control-sm" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const getBuffer = (file: File): Promise<Uint8Array> => {
  return new Promise<Uint8Array>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      resolve(new Uint8Array(reader.result as ArrayBuffer));
    }
    reader.onerror = () => {
      reject();
    }
  });
}

export default NavBarComponent;
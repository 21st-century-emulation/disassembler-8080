import Disassembly from "./Disassembly";
import { DisassembleOpcode, OpcodeFromByte, OpcodeLength } from "./Opcode";

export function disassembleRom(startAddress: number, rom: Uint8Array): Disassembly {
  let programCounter = startAddress;
  let code: [number, Uint8Array, string][] = [];

  while (programCounter < rom.length) {
    const opcodeByte = rom[programCounter - startAddress];
    const opcode = OpcodeFromByte(opcodeByte);
    const bytes = rom.slice(programCounter - startAddress, programCounter - startAddress + OpcodeLength(opcode));
    const operand1 = rom[(programCounter - startAddress + 1) & 0xFFFF];
    const operand2 = rom[(programCounter - startAddress + 2) & 0xFFFF];

    code.push([programCounter, bytes, DisassembleOpcode(opcode, opcodeByte, operand1, operand2)]);

    programCounter += OpcodeLength(opcode);
  }

  return new Disassembly(startAddress, rom, code);
}
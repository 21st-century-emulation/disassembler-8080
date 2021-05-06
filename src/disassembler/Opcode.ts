export enum Opcode {
  ACI,
  ADC,
  ADD,
  ADI,
  ANA,
  ANI,
  CALL,
  CC,
  CNC,
  CZ,
  CNZ,
  CPO,
  CPE,
  CP,
  CM,
  CMA,
  CMC,
  CMP,
  CPI,
  DAA,
  DAD,
  DCR,
  DCX,
  DI,
  EI,
  HLT,
  IN,
  INR,
  INX,
  JMP,
  JNZ,
  JZ,
  JNC,
  JC,
  JPO,
  JPE,
  JP,
  JM,
  LDA,
  LDAX,
  LHLD,
  LXI,
  MOV,
  MVI,
  NOOP,
  ORA,
  ORI,
  OUT,
  PCHL,
  POP,
  PUSH,
  RAL,
  RAR,
  RET,
  RNZ,
  RZ,
  RNC,
  RC,
  RPO,
  RPE,
  RP,
  RM,
  RLC,
  RRC,
  RST,
  SBB,
  SBI,
  SHLD,
  SPHL,
  STA,
  STAX,
  STC,
  SUB,
  SUI,
  XCHG,
  XRA,
  XRI,
  XTHL,
}

const opcodeArray: Opcode[] = [
  Opcode.NOOP,Opcode.LXI,Opcode.STAX,Opcode.INX,Opcode.INR,Opcode.DCR,Opcode.MVI,Opcode.RLC,Opcode.NOOP,Opcode.DAD,Opcode.LDAX,Opcode.DCX,Opcode.INR,Opcode.DCR,Opcode.MVI,Opcode.RRC,
  Opcode.NOOP,Opcode.LXI,Opcode.STAX,Opcode.INX,Opcode.INR,Opcode.DCR,Opcode.MVI,Opcode.RAL,Opcode.NOOP,Opcode.DAD,Opcode.LDAX,Opcode.DCX,Opcode.INR,Opcode.DCR,Opcode.MVI,Opcode.RAR,
  Opcode.NOOP,Opcode.LXI,Opcode.SHLD,Opcode.INX,Opcode.INR,Opcode.DCR,Opcode.MVI,Opcode.DAA,Opcode.NOOP,Opcode.DAD,Opcode.LHLD,Opcode.DCX,Opcode.INR,Opcode.DCR,Opcode.MVI,Opcode.CMA,
  Opcode.NOOP,Opcode.LXI,Opcode.STA,Opcode.INX,Opcode.INR,Opcode.DCR,Opcode.MVI,Opcode.STC,Opcode.NOOP,Opcode.DAD,Opcode.LDA,Opcode.DCX,Opcode.INR,Opcode.DCR,Opcode.MVI,Opcode.CMC,
  Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,
  Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,
  Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,
  Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.HLT,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,Opcode.MOV,
  Opcode.ADD,Opcode.ADD,Opcode.ADD,Opcode.ADD,Opcode.ADD,Opcode.ADD,Opcode.ADD,Opcode.ADD,Opcode.ADC,Opcode.ADC,Opcode.ADC,Opcode.ADC,Opcode.ADC,Opcode.ADC,Opcode.ADC,Opcode.ADC,
  Opcode.SUB,Opcode.SUB,Opcode.SUB,Opcode.SUB,Opcode.SUB,Opcode.SUB,Opcode.SUB,Opcode.SUB,Opcode.SBB,Opcode.SBB,Opcode.SBB,Opcode.SBB,Opcode.SBB,Opcode.SBB,Opcode.SBB,Opcode.SBB,
  Opcode.ANA,Opcode.ANA,Opcode.ANA,Opcode.ANA,Opcode.ANA,Opcode.ANA,Opcode.ANA,Opcode.ANA,Opcode.XRA,Opcode.XRA,Opcode.XRA,Opcode.XRA,Opcode.XRA,Opcode.XRA,Opcode.XRA,Opcode.XRA,
  Opcode.ORA,Opcode.ORA,Opcode.ORA,Opcode.ORA,Opcode.ORA,Opcode.ORA,Opcode.ORA,Opcode.ORA,Opcode.CMP,Opcode.CMP,Opcode.CMP,Opcode.CMP,Opcode.CMP,Opcode.CMP,Opcode.CMP,Opcode.CMP,
  Opcode.RNZ,Opcode.POP,Opcode.JNZ,Opcode.JMP,Opcode.CNZ,Opcode.PUSH,Opcode.ADI,Opcode.RST,Opcode.RZ,Opcode.RET,Opcode.JZ,Opcode.JMP,Opcode.CZ,Opcode.CALL,Opcode.ACI,Opcode.RST,
  Opcode.RNC,Opcode.POP,Opcode.JNC,Opcode.OUT,Opcode.CNC,Opcode.PUSH,Opcode.SUI,Opcode.RST,Opcode.RC,Opcode.RET,Opcode.JC,Opcode.IN,Opcode.CC,Opcode.CALL,Opcode.SBI,Opcode.RST,
  Opcode.RPO,Opcode.POP,Opcode.JPO,Opcode.XTHL,Opcode.CPO,Opcode.PUSH,Opcode.ANI,Opcode.RST,Opcode.RPE,Opcode.PCHL,Opcode.JPE,Opcode.XCHG,Opcode.CPE,Opcode.CALL,Opcode.XRI,Opcode.RST,
  Opcode.RP,Opcode.POP,Opcode.JP,Opcode.DI,Opcode.CP,Opcode.PUSH,Opcode.ORI,Opcode.RST,Opcode.RM,Opcode.SPHL,Opcode.JM,Opcode.EI,Opcode.CM,Opcode.CALL,Opcode.CPI,Opcode.RST
];

export function OpcodeLength(opcode: Opcode): number {
  switch (opcode) {
    case Opcode.ACI:
       return 2;
    case Opcode.ADC:
      return 1;
    case Opcode.ADD:
      return 1;
    case Opcode.ADI:
      return 2;
    case Opcode.ANA:
      return 1;
    case Opcode.ANI:
      return 1;
    case Opcode.CALL:
      return 3;
    case Opcode.CC:
      return 3;
    case Opcode.CNC:
      return 3;
    case Opcode.CZ:
      return 3;
    case Opcode.CNZ:
      return 3;
    case Opcode.CPO:
      return 3;
    case Opcode.CPE:
      return 3;
    case Opcode.CP:
      return 3;
    case Opcode.CM:
      return 3;
    case Opcode.CMA:
      return 1;
    case Opcode.CMC:
      return 1;
    case Opcode.CMP:
      return 1;
    case Opcode.CPI:
      return 2;
    case Opcode.DAA:
      return 1;
    case Opcode.DAD:
      return 1;
    case Opcode.DCR:
      return 1;
    case Opcode.DCX:
      return 1;
    case Opcode.DI:
      return 1;
    case Opcode.EI:
      return 1;
    case Opcode.HLT:
      return 1;
    case Opcode.IN:
      return 2;
    case Opcode.INR:
      return 1;
    case Opcode.INX:
      return 1;
    case Opcode.JMP:
      return 3;
    case Opcode.JNZ:
      return 3;
    case Opcode.JZ:
      return 3;
    case Opcode.JNC:
      return 3;
    case Opcode.JC:
      return 3;
    case Opcode.JPO:
      return 3;
    case Opcode.JPE:
      return 3;
    case Opcode.JP:
      return 3;
    case Opcode.JM:
      return 3;
    case Opcode.LDA:
      return 3;
    case Opcode.LDAX:
      return 1;
    case Opcode.LHLD:
      return 3;
    case Opcode.LXI:
      return 3;
    case Opcode.MOV:
      return 1;
    case Opcode.MVI:
      return 2;
    case Opcode.NOOP:
      return 1;
    case Opcode.ORA:
      return 1;
    case Opcode.ORI:
      return 2;
    case Opcode.OUT:
      return 2;
    case Opcode.PCHL:
      return 1;
    case Opcode.POP:
      return 1;
    case Opcode.PUSH:
      return 1;
    case Opcode.RAL:
      return 1;
    case Opcode.RAR:
      return 1;
    case Opcode.RET:
      return 1;
    case Opcode.RNZ:
      return 1;
    case Opcode.RZ:
      return 1;
    case Opcode.RNC:
      return 1;
    case Opcode.RC:
      return 1;
    case Opcode.RPO:
      return 1;
    case Opcode.RPE:
      return 1;
    case Opcode.RP:
      return 1;
    case Opcode.RM:
      return 1;
    case Opcode.RLC:
      return 1;
    case Opcode.RRC:
      return 1;
    case Opcode.RST:
      return 1;
    case Opcode.SBB:
      return 1;
    case Opcode.SBI:
      return 2;
    case Opcode.SHLD:
      return 3;
    case Opcode.SPHL:
      return 1;
    case Opcode.STA:
      return 3;
    case Opcode.STAX:
      return 1;
    case Opcode.STC:
      return 1;
    case Opcode.SUB:
      return 1;
    case Opcode.SUI:
      return 2;
    case Opcode.XCHG:
      return 1;
    case Opcode.XRA:
      return 1;
    case Opcode.XRI:
      return 2;
    case Opcode.XTHL:
      return 1;
    default:
      throw new Error(`Invalid opcode ${opcode}`);
  }
}

export function OpcodeFromByte(opcodeByte: number): Opcode {
  return opcodeArray[opcodeByte];
}

function operandsAsWord(operand1: number, operand2: number): string {
  return ((operand2 << 8) | operand1).toString(16).padStart(4, "0");
}

function registerFromArithmeticOp(opcodeByte: number): string {
  return ["B", "C", "D", "E", "H", "L", "(HL)", "A", "B", "C", "D", "E", "H", "L", "(HL)", "A"][opcodeByte & 0xF];
}

function decodeMovDestination(opcodeByte: number): string {
  switch (opcodeByte & 0xF0) {
    case 0x40:
      return ((opcodeByte & 0xF) < 8) ? "B" : "C";
    case 0x50:
      return ((opcodeByte & 0xF) < 8) ? "D" : "E";
    case 0x60:
      return ((opcodeByte & 0xF) < 8) ? "H" : "L";
    case 0x70:
      return ((opcodeByte & 0xF) < 8) ? "(HL)" : "A";
    default:
      throw new Error(`Invalid opcode for MOV ${opcodeByte.toString(16)} - ${(opcodeByte & 0xF0).toString(16)}`);
  }
}

function decodeMovSource(opcodeByte: number): string {
  return ["B", "C", "D", "E", "H", "L", "(HL)", "A", "B", "C", "D", "E", "H", "L", "(HL)", "A"][opcodeByte & 0xF];
}

export function DisassembleOpcode(opcode: Opcode, opcodeByte: number, operand1: number, operand2: number): string {
  switch (opcode) {
    case Opcode.ACI:
       return `ACI  ${operand1.toString(16)}`;
    case Opcode.ADC:
      return `ADC  ${registerFromArithmeticOp(opcodeByte)}`;
    case Opcode.ADD:
      return `ADC  ${registerFromArithmeticOp(opcodeByte)}`;
    case Opcode.ADI:
      return `ADI  ${operand1.toString(16)}`;
    case Opcode.ANA:
      return `ANA  ${registerFromArithmeticOp(opcodeByte)}`;
    case Opcode.ANI:
      return `ANI  ${operand1.toString(16)}`;
    case Opcode.CALL:
      return `CALL ${operandsAsWord(operand1, operand2)}`;
    case Opcode.CC:
      return `CC   ${operandsAsWord(operand1, operand2)}`;
    case Opcode.CNC:
      return `CNC  ${operandsAsWord(operand1, operand2)}`;
    case Opcode.CZ:
      return `CZ   ${operandsAsWord(operand1, operand2)}`;
    case Opcode.CNZ:
      return `CNZ  ${operandsAsWord(operand1, operand2)}`;
    case Opcode.CPO:
      return `CPO  ${operandsAsWord(operand1, operand2)}`;
    case Opcode.CPE:
      return `CPE  ${operandsAsWord(operand1, operand2)}`;
    case Opcode.CP:
      return `CP   ${operandsAsWord(operand1, operand2)}`;
    case Opcode.CM:
      return `CM   ${operandsAsWord(operand1, operand2)}`;
    case Opcode.CMA:
      return `CMA`;
    case Opcode.CMC:
      return `CMC`;
    case Opcode.CMP:
      return `CMP  ${registerFromArithmeticOp(opcodeByte)}`;
    case Opcode.CPI:
      return `CPI  ${operand1.toString(16)}`;
    case Opcode.DAA:
      return `DAA`;
    case Opcode.DAD:
      return `DAD  ${{0x09: "BC", 0x19: "DE", 0x29: "HL", 0x39: "SP"}[opcodeByte]}`;
    case Opcode.DCR:
      return `DCR  ${{0x05: "B", 0x0D: "C", 0x15: "D", 0x1D: "E", 0x25: "H", 0x2D: "L", 0x35: "(HL)", 0x3D: "A"}[opcodeByte]}`;
    case Opcode.DCX:
      return `DCX  ${{0x0B: "BC", 0x1B: "DE", 0x2B: "HL", 0x3B: "SP"}[opcodeByte]}`;
    case Opcode.DI:
      return `DI`;
    case Opcode.EI:
      return `EI`;
    case Opcode.HLT:
      return `HLT`;
    case Opcode.IN:
      return `IN   ${operand1.toString(16)}`;
    case Opcode.INR:
      return `INR  ${{0x04: "B", 0x0C: "C", 0x14: "D", 0x1C: "E", 0x24: "H", 0x2C: "L", 0x34: "(HL)", 0x3C: "A"}[opcodeByte]}`;
    case Opcode.INX:
      return `INX  ${{0x03: "BC", 0x13: "DE", 0x23: "HL", 0x33: "SP"}[opcodeByte]}`;
    case Opcode.JMP:
      return `JMP  ${operandsAsWord(operand1, operand2)}`;
    case Opcode.JNZ:
      return `JNZ  ${operandsAsWord(operand1, operand2)}`;
    case Opcode.JZ:
      return `JZ   ${operandsAsWord(operand1, operand2)}`;
    case Opcode.JNC:
      return `JNC  ${operandsAsWord(operand1, operand2)}`;
    case Opcode.JC:
      return `JC   ${operandsAsWord(operand1, operand2)}`;
    case Opcode.JPO:
      return `JPO  ${operandsAsWord(operand1, operand2)}`;
    case Opcode.JPE:
      return `JPE  ${operandsAsWord(operand1, operand2)}`;
    case Opcode.JP:
      return `JP   ${operandsAsWord(operand1, operand2)}`;
    case Opcode.JM:
      return `JM   ${operandsAsWord(operand1, operand2)}`;
    case Opcode.LDA:
      return `LDA  (${operandsAsWord(operand1, operand2)})`;
    case Opcode.LDAX:
      return `LDAX ${{0x0A: "BC", 0x1A: "DE"}[opcodeByte]}`;
    case Opcode.LHLD:
      return `LHLD (${operandsAsWord(operand1, operand2)}`;
    case Opcode.LXI:
      return `LXI  ${{0x01: "BC", 0x11: "DE", 0x21: "HL", 0x31: "SP"}[opcodeByte]}, ${operandsAsWord(operand1, operand2)}`;
    case Opcode.MOV:
      return `MOV  ${decodeMovDestination(opcodeByte)},${decodeMovSource(opcodeByte)}`;
    case Opcode.MVI:
      return `MVI  ${{0x06: "B", 0x0E: "C", 0x16: "D", 0x1E: "E", 0x26: "H", 0x2E: "L", 0x36: "(HL)", 0x3E: "A"}[opcodeByte]}, ${operand1.toString(16)}`;
    case Opcode.NOOP:
      return `NOOP`;
    case Opcode.ORA:
      return `ORA  ${registerFromArithmeticOp(opcodeByte)}`;
    case Opcode.ORI:
      return `ORI  ${operand1.toString(16)}`;
    case Opcode.OUT:
      return `OUT  ${operand1.toString(16)}`;
    case Opcode.PCHL:
      return `PCHL`;
    case Opcode.POP:
      return `POP  ${{0xC1: "BC", 0xD1: "DE", 0xE1: "HL", 0xF1: "PSW"}[opcodeByte]}`;
    case Opcode.PUSH:
      return `PUSH ${{0xC5: "BC", 0xD5: "DE", 0xE5: "HL", 0xF5: "PSW"}[opcodeByte]}`;
    case Opcode.RAL:
      return `RAL`;
    case Opcode.RAR:
      return `RAR`;
    case Opcode.RET:
      return `RET`;
    case Opcode.RNZ:
      return `RNZ`;
    case Opcode.RZ:
      return `RZ`;
    case Opcode.RNC:
      return `RNC`;
    case Opcode.RC:
      return `RC`;
    case Opcode.RPO:
      return `RPO`;
    case Opcode.RPE:
      return `RPE`;
    case Opcode.RP:
      return `RP`;
    case Opcode.RM:
      return `RM`;
    case Opcode.RLC:
      return `RLC`;
    case Opcode.RRC:
      return `RRC`;
    case Opcode.RST:
      return `RST ${{0xC7: "0", 0xCF: "1", 0xD7: "2", 0xDF: "3", 0xE7: "4", 0xEF: "5", 0xF7: "6", 0xFF: "7", }[opcodeByte]}`;
    case Opcode.SBB:
      return `SBB  ${registerFromArithmeticOp(opcodeByte)}`;
    case Opcode.SBI:
      return `SBI  ${operand1.toString(16)}`;
    case Opcode.SHLD:
      return `SHLD (${operandsAsWord(operand1, operand2)})`;
    case Opcode.SPHL:
      return `SPHL`;
    case Opcode.STA:
      return `STA  (${operandsAsWord(operand1, operand2)})`;
    case Opcode.STAX:
      return `STAX ${{0x02: "BC", 0x12: "DE"}[opcodeByte]}`;
    case Opcode.STC:
      return `STC`;
    case Opcode.SUB:
      return `SUB  ${registerFromArithmeticOp(opcodeByte)}`;
    case Opcode.SUI:
      return `SUI  ${operand1.toString(16)}`;
    case Opcode.XCHG:
      return `XCHG`;
    case Opcode.XRA:
      return `XRA  ${registerFromArithmeticOp(opcodeByte)}`;
    case Opcode.XRI:
      return `XRI  {operand1.toString(16)}`;
    case Opcode.XTHL:
      return `XTHL`;
    default:
      throw new Error(`Invalid opcode ${opcode}`);
  }
}
class Disassembly {
  startAddress: number;
  rawBytes: Uint8Array;
  program: [number, Uint8Array, string][];

  constructor(startAddress: number, rawBytes: Uint8Array, program: [number, Uint8Array, string][]) {
    this.startAddress = startAddress;
    this.rawBytes = rawBytes;
    this.program = program;
  }

  public disassembly(): string {
    return this.program.map(([pc, bytes, code]) => {
      return pc.toString(16).padStart(4, "0").padEnd(30, " ") +
      Array.from(bytes).map(b => b.toString(16).padStart(2, "0") + " ").reduce((s, c) => s + c).padEnd(15, " ") +
      code +
      "\n"
    }).reduce((s, c) => s + c);
  }

  public hexDump(): [number, number[], string[]][] {
    return Array.from(Array(this.rawBytes.length / 16).keys())
      .map(pc => {
        const adjustedPc = pc * 16;
        const byteSegment = Array.from(this.rawBytes.slice(adjustedPc, adjustedPc + 16));
        return [adjustedPc + this.startAddress, byteSegment, byteSegment.map(b => String.fromCharCode(b))];
      });
  }
}

export default Disassembly;
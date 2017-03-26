const audioCtx = new (window['AudioContext'] || window['webkitAudioContext']);

export class Noise {
  private static CHANNELS = 2;

  private static FRAME_COUNT = audioCtx.sampleRate * 2.0;

  private source = audioCtx.createBufferSource();

  private pinkData = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];

  constructor() {
    const buffer = audioCtx.createBuffer(
      Noise.CHANNELS,
      Noise.FRAME_COUNT, 
      audioCtx.sampleRate,
    );

    for (let channel = 0; channel < Noise.CHANNELS; channel++) {
      var nowBuffering = buffer.getChannelData(channel);
      for (var i = 0; i < Noise.FRAME_COUNT; i++) {
        nowBuffering[i] = this.makePinkNoise();
      }
    }
    this.source.buffer = buffer;
    this.source.loop = true;
    this.source.start();
  }

  start(): void {
    this.source.connect(audioCtx.destination);
  }

  stop(): void {
    this.source.disconnect(audioCtx.destination);
  }

  private makePinkNoise(): number {
    const white = Math.random() * 2 - 1;
    this.pinkData[0] = 0.99886 * this.pinkData[0] + white * 0.0555179;
    this.pinkData[1] = 0.99332 * this.pinkData[1] + white * 0.0750759;
    this.pinkData[2] = 0.96900 * this.pinkData[2] + white * 0.1538520;
    this.pinkData[3] = 0.86650 * this.pinkData[3] + white * 0.3104856;
    this.pinkData[4] = 0.55000 * this.pinkData[4] + white * 0.5329522;
    this.pinkData[5] = -0.7616 * this.pinkData[5] - white * 0.0168980;
    const output =  (this.pinkData.reduce(sum, 0) + white * 0.5362) * 0.11;
    this.pinkData[6] = white * 0.115926;
    return output;
  }
}


const sum = (a, b) => a + b;

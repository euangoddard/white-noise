const audioCtx = new (AudioContext || window['webkitAudioContext']);

export class Noise {
  private static CHANNELS = 2;

  private static FRAME_COUNT = audioCtx.sampleRate * 2.0;

  private source = audioCtx.createBufferSource();

  constructor() {
    const buffer = audioCtx.createBuffer(
      Noise.CHANNELS,
      Noise.FRAME_COUNT, 
      audioCtx.sampleRate,
    );
    for (let channel = 0; channel < Noise.CHANNELS; channel++) {
      var nowBuffering = buffer.getChannelData(channel);
      for (var i = 0; i < Noise.FRAME_COUNT; i++) {
        nowBuffering[i] = Math.random() * 2 - 1;
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
}
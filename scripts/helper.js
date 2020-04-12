class Helper {
constructor () {
  this.totalTime = 0;
}
  playPauseAndUpdate (song) {
    player.playPause(song);
      this.totalTime += player.getDuration();
  }
}
var helper = new Helper()

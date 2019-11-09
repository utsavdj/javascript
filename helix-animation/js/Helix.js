class Helix {
  constructor(canvasId) {
    this.canvasElement = document.getElementById(canvasId);
    this.noOfRows = 12;
    this.noOfCols = 18;
    this.canvasWidth = 600;
    this.canvasHeight = 500;
    this.canvasCenterPositionY = this.canvasHeight / 2;
    // this.colOffset = 10;
    this.amplitude = 60;
    // this.frequency = 27;
    this.maxCircleSize = 20;
    this.speed = 0.04;
    this.phase = 0;
    this.noOfStrands = 2;
    this.leftSpacing = 50;
    this.createBackground();
    window.requestAnimationFrame(this.draw.bind(this));
  }

  createBackground() {
    this.canvasContext = this.canvasElement.getContext("2d");
    this.canvasElement.width = this.canvasWidth;
    this.canvasElement.height = this.canvasHeight;
    this.canvasElement.style.backgroundColor = '#043A4A';
  }

  // linearly maps value from the range (currentMin-currentMax) to (newMin-newMax)
  map(value, currentMin, currentMax, newMin, newMax) {
    // convert (currentMin, currentMax) to (0, 1)
    value = (value - currentMin) / (currentMax - currentMin);
    // convert (0, 1) to (newMin, newMax)
    return newMin + value * (newMax - newMin);
  }

  draw() {
    // for (let i = 0; i < this.noOfCols;  i++){
    //   this.yPosition = this.yPosition + this.amplitude * Math.sin(this.xPosition/this.frequency);
    //   this.xPosition += this.colOffset;
    // }


    // clears elements on canvas on each frame
    this.canvasContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    for (let strand = 0; strand < this.noOfStrands; strand += 1) {
      this.strandPhase = this.phase + this.map(strand, 0, this.noOfStrands, 0, 2 * Math.PI);
      for (let col = 0; col < this.noOfCols; col++) {
        this.colOffset = this.map(col, 0, this.noOfCols, 0, 2 * Math.PI);
        this.circlePositionX = this.map(col, 0, this.noOfCols, this.leftSpacing, this.canvasWidth - this.maxCircleSize);
        for (let row = 0; row < this.noOfRows; row++) {
          this.rowOffset = row * 14;
          this.circlePositionY = this.canvasCenterPositionY + this.rowOffset +
            Math.sin(this.strandPhase + this.colOffset) * this.amplitude;
          this.sizeOffset = (Math.cos(this.strandPhase - (row / this.noOfRows) + this.colOffset) + 1) * 0.5;
          this.circleSize = this.sizeOffset * this.maxCircleSize;
          this.circleRadius = this.circleSize / 2;

          // create circle
          this.canvasContext.beginPath();
          this.canvasContext.arc(this.circlePositionX, this.circlePositionY, this.circleRadius, 0, 2 * Math.PI);
          this.canvasContext.fillStyle = '#F0988D';
          this.canvasContext.fill();
          this.canvasContext.closePath();
        }
      }
    }

    this.phase = window.requestAnimationFrame(this.draw.bind(this)) * this.speed;
  }

}

export default Helix;

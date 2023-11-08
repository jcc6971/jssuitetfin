function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect(50, 50, 50, 150);

  ctx.fillStyle = "rgba(0,100,200,0.5)";
  ctx.fillRect(100, 30, 100, 50);

  ctx.fillStyle = "rgba(100,100,200,0.5)";
  ctx.fillRect(10, 25, 100, 100);
  ctx.clearRect(35, 25, 40, 40);
  ctx.strokeRect(135, 75, 40, 40);

  ctx.fillStyle = "rgba(300,100,200,0.8)";
  ctx.beginPath();
  ctx.moveTo(180, 150);
  ctx.lineTo(100, 75);
  ctx.lineTo(100, 150);

  ctx.fill();
}
window.addEventListener("load", draw);

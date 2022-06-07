import React from 'react'

function Java() {
  return (
    <div className = 'java' onload='draw();'>
        <h1>Java</h1>
        
        <h3>Something about Java ...</h3>

        <h2>More info ?</h2>

        <canvas id='JavaCanvas'></canvas>

        <p>Java is ...</p>

    </div>
  )

  // currently not drawing shappes
  function draw() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    ctx.fillStyle="#FF0000";
    ctx.fillText("Hello World");

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  
}
}


export default Java;
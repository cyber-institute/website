const SIZE = 64
const MAX_FRAME_NUMBER = 100000
const CLOCKS = 50
const NUM_LINES = 128
const OMEGA = Math.PI*2/MAX_FRAME_NUMBER
const PHI = 3/4*Math.PI
const NU = Math.PI/NUM_LINES

const canvas = document.createElement('canvas')
document.body.appendChild(canvas)
canvas.style.position = 'absolute'
canvas.style.zIndex = -1
canvas.style.top = '0px'
canvas.style.left = '0px'
canvas.style.width = '100%'
canvas.style.height = '100vh'

const window_width = canvas.offsetWidth
const window_height = window.innerHeight
const pixel_depth = window.devicePixelRatio

canvas.width = window_width * pixel_depth
canvas.height = window_height * pixel_depth
const ctx = canvas.getContext('2d')
ctx.lineWidth = 1
ctx.strokeStyle = '#52317822'

window.addEventListener('mousemove', function (e) {
  mouse_x = e.pageX
  mouse_y = e.pageY
})

let frame_number = 0

const containerStyle = {
  position: 'absolute',
  zIndex: -1
}

let mouse_x = 0
let mouse_y = 0

const lines = new Array(NUM_LINES)
for (let i = 0; i < NUM_LINES; i++) {
  lines[i] = new Float32Array(SIZE)
  for (let j = 0; j < SIZE; j++) {
    lines[i][j] = 300 * Math.sin(j * 3 / 4 * Math.PI / (SIZE - 1) + i * Math.PI / NUM_LINES)
  }
}

function main_loop () {
  for (let k=0; k<CLOCKS; k++) {
    for (let i=0; i<NUM_LINES; i++) {
      let prev_point = lines[i][0];
      let curr_point = 0;
      let next_point = lines[i][1];
      for (let j=1; j<SIZE-1; j++) {
        curr_point = next_point;
        next_point = lines[i][j+1];
        //lines_v[i][j] = 0.99999 * (lines_v[i][j] + 0.0000005 * (prev_point - 2 * lines[i][j] + lines[i][j+1]));
        //lines[i][j] += lines_v[i][j]
        const dy = 0.01*(mouse_y - (window_height*0.5 + lines[i][j]));
        let x = 0
        if (dy !== 0) {
          const dx = 0.01*(mouse_x - window_width/SIZE*j);
          const d = dx*dx + dy*dy;
          const p = 0.03/(d > 1 ? d : 1);
          const s = (0 < dy);
          x = (s - !s) * p;
        }
        lines[i][j] += 0.01 * (prev_point - 2 * curr_point + next_point) - x;
        prev_point = curr_point;
      }
      const t = OMEGA*frame_number + i*NU
      lines[i][0] = 300*Math.sin(t);
      lines[i][SIZE-1] = 300*Math.sin(t + PHI);
    }
    frame_number++;
    if (frame_number == MAX_FRAME_NUMBER) {
      frame_number = 0;
    }
  }

  ctx.beginPath();
  for (let i=0; i<lines.length; i++) {
    for (let j=0; j<lines[i].length-1; j++) {
      ctx.moveTo(pixel_depth*window_width/(SIZE-1)*j, pixel_depth*(window_height*0.5 + lines[i][j]));
      ctx.lineTo(pixel_depth*window_width/(SIZE-1)*(j+1), pixel_depth*(window_height*0.5 + lines[i][j+1]));
    }
  }
  ctx.clearRect(0, 0, window_width*2, window_height*2);
  ctx.stroke();

  requestAnimationFrame(main_loop);
}

let rAF = window.requestAnimationFrame(main_loop)

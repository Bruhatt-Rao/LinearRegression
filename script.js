var pos1x = 0, pos2x = 0;
var pos1y = 0, pos2y = 0;
var w = 0.0;
var dw = 0.0;
var db = 0.0;
var b = 0.0;
var a = 0.000018;
const width = 500;
var points = gen();
var m = points[0].length;
var last = 0.1;

function init() {
  b = randint(0, width);
  pos1x = 0;
  pos1y = f(0);
  pos2x = width;
  pos2y = f(width);
}

function update() {
  pos1y = f(0);
  pos2y = f(width);
  
  stroke("#0d1b2a");
  line(pos1x, pos1y, pos2x, pos2y);
  
  for (var i = points[0].length - 1; i >= 0; i--) {
    
    // Displaying the points
    color("#778da9");
    ellipse(points[0][i], points[1][i], 5);

  }

  // AIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII (with the braids)
  let outw = get_cost(m, points[0], points[1], w, b);
  dw = outw[0];
  db = outw[1];
  w -= a * dw;
  b -= (a * db)*5000;
  if (last == w.toFixed(4)) {
    console.log("ended")
    noloop();
  }
  last= w.toFixed(4);
  
  // document.getElementById("p").innerText = "Error rate: " + error().toFixed(3) + "%";
  document.getElementById("p2").innerText = "y = "+w.toFixed(4)+"x + " + b.toFixed(4);
}

function f(x) {
  var out = (w * x) + b;
  return out
}

function reset() {
  w = 0;
  b = randint(0, width);
  points = gen();
  loop();
}

function gen() {
  m2 = rand();
  b2 = randint(100, 300);
  points2 = [
    [],
    []
  ];
  for (var i = 500; i >= 0; i -= 10) {
    points2[0].push(i + randint(-20, 20));
    points2[1].push(((m2 * i) + b2) + randint(-20, 20));
  }
  return points2;
}

function get_cost(m, x, y, w, b) {
  dj_dw = 0
  dj_db = 0
  for (var i=0; i<50; i++) {
    f_wb = w * x[i] + b 
    dj_dw_i = (f_wb - y[i]) * x[i] 
    dj_db_i = f_wb - y[i] 
    dj_db += dj_db_i
    dj_dw += dj_dw_i
  }
  dj_dw = dj_dw / m 
  dj_db = dj_db / m
  return [dj_dw, dj_db]
}

loop();

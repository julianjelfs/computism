const disk = document.getElementsByClassName("disk")[0];
const txt = document.getElementsByClassName("txt");
const subtxt = document.getElementsByClassName("sub-txt");
const left = document.getElementsByClassName("left");
const right = document.getElementsByClassName("right");
let leftPos = 0;
let rightPos = 0;

for (let l of left) {
  l.style.left = `${leftPos}px`;
  leftPos += 20;
}

for (let r of right) {
  r.style.right = `${rightPos}px`;
  rightPos += 20;
}

for (let s of subtxt) {
  s.style.transform = "scale(100%)";
  s.style.opacity = "100%";
}

for (let t of txt) {
  t.style.transform = "scale(100%) rotate3d(1,1,1,720deg)";
}

disk.style.top = "40px";

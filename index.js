const render = x => `
  <div class="toggle-slider">
    <div class="toggle-box" style="transform: translate3d(${x}, 0, 0)">
  </div>
`
const cal = (beginX, endX, duration, beginTime) => {
    const now = performance.now();
    const passedTime = now - beginTime;

    return (endX - beginX) / duration * passedTime + beginX;
}

const beginX = 0;
const endX = 300;
const duration = 5000;
const frameTime = 1000 / 60;
    
let beginTime = performance.now();

const startAnimation = () => {
  const currX = cal(beginX, endX, duration, beginTime);

  document.body.innerHTML = render(currX);

  setTimeout(startAnimation, frameTime);
}

startAnimation(0);

import anime from "animejs";

const WaterDropGrid = () => {
  return (
    <div className=" relative grid h-screen place-content-center bg-slate-900">
      <DotGrid />
    </div>
  );
};

const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;





const DotGrid = () => {
  
  const handleDotClick = (e: any) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 2, easing: "easeOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -45, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          key={`${i}-${j}`}
          data-index={index}
          className="group hover:bg-slate-600 transition-colors p-2 rounded-full cursor-crosshair"
        >
          <div
            data-index={index}
            className=" dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      className=" grid w-fit"
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
    >
      {dots}
    </div>
  );
};

export default WaterDropGrid;

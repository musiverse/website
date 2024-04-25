import { useEffect, useState, useMemo } from "react";
// import "./index.css";

const MagicMouseEffect = () => {
  const [last, setLast] = useState({
    starTimestamp: new Date().getTime(),
    starPosition: { x: 0, y: 0 },
    mousePosition: { x: 0, y: 0 },
  });

  const config = useMemo(
    () => ({
      starAnimationDuration: 1500,
      minimumTimeBetweenStars: 250,
      minimumDistanceBetweenStars: 75,
      glowDuration: 75,
      maximumGlowPointSpacing: 10,
      colors: ["249 146 253", "252 254 255"],
      sizes: ["1.4rem", "1rem", "0.6rem"],
      animations: ["fall-1", "fall-2", "fall-3"],
    }),
    []
  );

  useEffect(() => {
    const handleOnMove = (e) => {
      const mousePosition = { x: e.clientX, y: e.clientY };
      adjustLastMousePosition(mousePosition);

      const now = new Date().getTime();
      const hasMovedFarEnough =
        calcDistance(last.starPosition, mousePosition) >=
        config.minimumDistanceBetweenStars;
      const hasBeenLongEnough =
        calcElapsedTime(last.starTimestamp, now) >
        config.minimumTimeBetweenStars;

      if (hasMovedFarEnough || hasBeenLongEnough) {
        createStar(mousePosition);
        updateLastStar(mousePosition);
      }

      createGlow(last.mousePosition, mousePosition);
      updateLastMousePosition(mousePosition);
    };

    const adjustLastMousePosition = (position) => {
      if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
        setLast((prevLast) => ({ ...prevLast, mousePosition: position }));
      }
    };

    const updateLastStar = (position) => {
      setLast((prevLast) => ({
        ...prevLast,
        starTimestamp: new Date().getTime(),
        starPosition: position,
      }));
    };

    const updateLastMousePosition = (position) => {
      setLast((prevLast) => ({ ...prevLast, mousePosition: position }));
    };

    const createStar = (position) => {
      const star = document.createElement("span");
      const color = selectRandom(config.colors);

      star.className = "star fa-solid fa-sparkle";

      star.style.left = px(position.x);
      star.style.top = px(position.y);
      star.style.fontSize = selectRandom(config.sizes);
      star.style.color = `rgb(${color})`;
      star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
      star.style.animationName = config.animations[count++ % 3];
      star.style.starAnimationDuration = ms(config.starAnimationDuration);

      document.body.appendChild(star);

      setTimeout(
        () => document.body.removeChild(star),
        config.starAnimationDuration
      );
    };

    const createGlow = (last, current) => {
      const distance = calcDistance(last, current);
      const quantity = determinePointQuantity(distance);

      const dx = (current.x - last.x) / quantity;
      const dy = (current.y - last.y) / quantity;

      Array.from(Array(quantity)).forEach((_, index) => {
        const x = last.x + dx * index;
        const y = last.y + dy * index;

        const glow = document.createElement("div");
        glow.className = "glow-point";
        glow.style.left = px(x);
        glow.style.top = px(y);

        document.body.appendChild(glow);

        setTimeout(() => document.body.removeChild(glow), config.glowDuration);
      });
    };

    const calcDistance = (a, b) => {
      const diffX = b.x - a.x;
      const diffY = b.y - a.y;

      return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
    };

    const calcElapsedTime = (start, end) => end - start;

    const determinePointQuantity = (distance) =>
      Math.max(Math.floor(distance / config.maximumGlowPointSpacing), 1);

    const selectRandom = (items) =>
      items[Math.floor(Math.random() * items.length)];
    const withUnit = (value, unit) => `${value}${unit}`;
    const px = (value) => withUnit(value, "px");
    const ms = (value) => withUnit(value, "ms");

    let count = 0;

    window.addEventListener("mousemove", handleOnMove);
    return () => {
      window.removeEventListener("mousemove", handleOnMove);
    };
  }, [last, config]);

  return null;
};

export default MagicMouseEffect;

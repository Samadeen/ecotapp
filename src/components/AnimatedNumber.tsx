import { animated, useSpring } from '@react-spring/web';

interface AnimatedNumberProps {
  value: number;
}

const AnimatedNumber = ({ value }: AnimatedNumberProps) => {
  const { number } = useSpring({
    from: { number: 1 },
    to: { number: value },
    config: { duration: 1500 },
  });

  return (
    <animated.div>{number.to((val: number) => Math.floor(val))}</animated.div>
  );
};

export default AnimatedNumber;

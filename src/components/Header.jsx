import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { StyledHeader } from './styles';

const Header = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const animation = useAnimation();
  const windowWidth = window.frames.innerWidth / 2.1;

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.5,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: windowWidth,
      });
    }
  }, [inView, animation, windowWidth]);

  return (
    <StyledHeader>
      <motion.div ref={ref} animate={animation}>
        <h1>Tyler Davis</h1>
        <p>Front-End Developer</p>
      </motion.div>
    </StyledHeader>
  );
};

export default Header;

import { StyledScrollIcon } from './styles';
import { motion } from 'framer-motion';

const ScrollIcon = () => {
  const bounce = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      ease: 'easeOut',
    },
  };
  return (
    <StyledScrollIcon>
      <motion.button
        type="button"
        transition={bounce}
        animate={{
          y: ['25%', '-25%'],
        }}
      >
        <i className="fa-solid fa-angle-down"></i>
      </motion.button>
    </StyledScrollIcon>
  );
};

export default ScrollIcon;

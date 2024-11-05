import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useMeasure from 'react-use-measure';

function CardCarousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, bounds] = useMeasure();
  const constraintsRef = useRef(null);

  const handleDragEnd = (event, info) => {
    const threshold = bounds.width / 4;
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (info.offset.x < 0 && currentIndex < items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  return (
    <div className="relative overflow-hidden py-8" ref={ref}>
      <motion.div
        ref={constraintsRef}
        className="flex items-center justify-center"
        style={{ height: bounds.width * 0.8 }}
      >
        <AnimatePresence initial={false}>
          {items.map((item, index) => {
            const distance = index - currentIndex;
            const scale = Math.max(0.7, 1 - Math.abs(distance) * 0.2);
            
            return (
              <motion.div
                key={item.id}
                className="absolute"
                style={{
                  width: bounds.width * 0.8,
                  height: bounds.width * 0.8,
                }}
                initial={{ scale: 0.7, x: distance * bounds.width }}
                animate={{
                  scale,
                  x: distance * (bounds.width * 0.8),
                  zIndex: 1 - Math.abs(distance)
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                drag="x"
                dragConstraints={constraintsRef}
                onDragEnd={handleDragEnd}
                whileTap={{ cursor: "grabbing" }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white font-semibold text-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
      
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default CardCarousel;
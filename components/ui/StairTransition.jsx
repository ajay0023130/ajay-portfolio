"use client";

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation';
import Stairs from './Stairs';

const StairTransition = () => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode='wait'>
            <motion.div 
                key={pathname}
                className='h-screen w-screen fixed bg-primary top-0 pointer-events-none z-40 flex'
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 0, transition: { delay: 1, duration: 0.6, ease: "easeInOut" }}}
                exit={{ opacity: 0.5, transition: { duration: 0.6, ease: "easeInOut" }}}
            >
                <Stairs />
            </motion.div>
        </AnimatePresence>
    )
}

export default StairTransition;

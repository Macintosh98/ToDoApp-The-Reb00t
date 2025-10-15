import { AnimatePresence, motion } from "motion/react";

export default function InIt({ children }: { children: React.ReactElement }) {
        return (
                <AnimatePresence>
                        {children ? (
                                <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0 }}
                                        transition={{
                                                duration: 0.4,
                                                scale: {
                                                        type: "spring",
                                                        visualDuration: 1,
                                                        bounce: 0.5,
                                                },
                                        }}
                                        // initial={{ opacity: 0, scale: 0.5 }}
                                        // animate={{ opacity: 1, scale: 1 }}
                                        // transition={{
                                        //         duration: 1,
                                        //         delay: 0.5,
                                        //         ease: [0, 0.71, 0.2, 1.01],
                                        // }}
                                >
                                        {children}
                                </motion.div>
                        ) : null}
                </AnimatePresence>
        );
}

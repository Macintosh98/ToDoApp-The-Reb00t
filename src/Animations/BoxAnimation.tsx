import { AnimatePresence, motion } from "motion/react";

export default function BoxAnimation({
        children,
        mkey,
}: {
        children: React.ReactElement;
        mkey: string;
}) {
        return (
                <AnimatePresence>
                        <motion.div
                                key={mkey}
                                layout
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                // transition={{
                                //         duration: 0.4,
                                //         scale: {
                                //                 type: "spring",
                                //                 visualDuration: 0.4,
                                //                 bounce: 0.5,
                                //         },
                                // }}
                                transition={{
                                        duration: 1,
                                        type: "spring",
                                        bounce: 0,
                                }}
                        >
                                {children}
                        </motion.div>
                </AnimatePresence>
        );
}

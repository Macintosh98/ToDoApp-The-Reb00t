import { frame, motion, useSpring } from "motion/react";
import { type RefObject, useEffect, useRef } from "react";
export default function MousePointer() {
        const ref = useRef<HTMLDivElement>(null);
        const { x, y } = useFollowPointer(ref);

        return (
                <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{
                                duration: 1,
                                delay: 0.5,
                                ease: [0, 0.71, 0.2, 1.01],
                        }}
                        ref={ref}
                        style={{ ...ball, x, y, position: "absolute" }}
                />
        );
}

const spring = { damping: 20, stiffness: 20 };

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
        const x = useSpring(0, spring);
        const y = useSpring(0, spring);

        // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
        useEffect(() => {
                if (!ref.current) return;

                const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
                        // biome-ignore lint/style/noNonNullAssertion: <explanation>
                        const element = ref.current!;

                        frame.read(() => {
                                x.set(clientX - element.offsetLeft - element.offsetWidth / 2 - 50);
                                y.set(clientY - element.offsetTop - element.offsetHeight / 2 - 50);
                        });
                };

                window.addEventListener("pointermove", handlePointerMove);

                return () => window.removeEventListener("pointermove", handlePointerMove);
        }, []);

        return { x, y };
}

/**
 * ==============   Styles   ================
 */

const ball = {
        width: 50,
        height: 50,
        backgroundColor: "#f5d0fe",
        borderRadius: "50%",
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
};

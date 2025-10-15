import type { Transition } from "motion/react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Logo() {
        const [order, setOrder] = useState(initialOrder);

        useEffect(() => {
                const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
                return () => clearTimeout(timeout);
        }, [order]);

        return (
                <ul style={container}>
                        {order.map((backgroundColor) => (
                                <motion.li
                                        key={backgroundColor}
                                        layout
                                        transition={spring}
                                        style={{ ...item, backgroundColor }}
                                />
                        ))}
                </ul>
        );
}

const initialOrder = ["#bef264", "#f0abfc", "#fcd34d", "#fda4af"];

/**
 * ==============   Utils   ================
 */
function shuffle([...array]: string[]) {
        return array.sort(() => Math.random() - 0.5);
}

/**
 * ==============   Styles   ================
 */

const spring: Transition = {
        type: "spring",
        damping: 20,
        stiffness: 300,
};

const container: React.CSSProperties = {
        listStyle: "none",
        padding: 0,
        margin: 0,
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        width: 150,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
};

const item: React.CSSProperties = {
        width: 50,
        height: 50,
        borderRadius: "10px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
};

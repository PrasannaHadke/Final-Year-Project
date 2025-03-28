// export const fadeIn = (direction, delay)=>{
//     return{
//         hidden: {
//             y : direction === "up" ? 40 : direction === "down" ? -40 : 0,
//             x : direction === "left" ? 40 : direction === "right" ? -40 : 0,
//         },
//         show: { 
//             y : 0,
//             x : 0,
//             transition: {
//                 type: "tween",  
//                 duration: 1.5,
//                 delay: delay,
//                 ease : [0.25,0.25,0.25,0.75]
//             }
//         }
            
//     }
// }

export const fadeIn = (direction = "up", delay = 0, duration = 1.5) => {
    const variants = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
        none: { x: 0, y: 0 }
    };

    return {
        hidden: variants[direction] || variants.none,
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration,
                delay,
                ease: [0.42, 0, 0.58, 1] // More natural easing curve
            }
        }
    };
};

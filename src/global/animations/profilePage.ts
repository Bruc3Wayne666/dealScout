export const dashAnimation = {
    hidden: (param: number) => ({
        // y: param % 2 === 0 ? 200 : -200,
        // x: param % 2 === 1 ? -200 : 200,
        // scale: 0.3,
        // transform: ,
        // rotate: param % 2 === 0 ? -180 * param : 180 * param
        x: 200,
        y: 200
    }),
    visible: (param: number) => ({
        rotate: 0,
        y: 0,
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            delay: param * 0.1
        }
    })
}

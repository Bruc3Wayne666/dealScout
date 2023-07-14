export const dashAnimation = {
    hidden: (param: number) => ({
        x: 200,
        y: 200
    }),
    visible: (param: number) => ({
        y: 0,
        x: 0,
        transition: {
            delay: param * 0.1
        }
    })
}

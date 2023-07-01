export const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: (param: number) => ({
        x: 0,
        opacity: 1,
        transition: {
            delay: param * 0.1
        }
    })
}

export const planAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: (param: number) => ({
        x: 0,
        opacity: 1,
        transition: {
            delay: param * 0.1
        }
    })
}

export const sectionLineAnimation = {
    hidden: (param: number) => ({
        x: 100 * param,
        opacity: 0
    }),
    visible: (param: number) => ({
        x: 0,
        opacity: 1,
        transition: {
            delay: param * 0.1
        }
    })
}

export const aboutAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: (param: number) => ({
        x: 0,
        opacity: 1,
        transition: {
            delay: param * 0.1
        }
    })
}

export const planBottomAnimation = {
    hidden: {
        // x: -100,
        opacity: 0
    },
    visible: (param: number) => ({
        // x: 0,
        opacity: 1,
        transition: {
            delay: param * 0.1
        }
    })
}

input.onGesture(Gesture.Shake, function () {
    RESULTADO = 0
    basic.clearScreen()
    basic.pause(1000)
    RESULTADO = randint(1, 3)
    if (RESULTADO == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (RESULTADO == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (RESULTADO == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
let RESULTADO = 0
RESULTADO = 0

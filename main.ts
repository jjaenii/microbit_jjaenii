let 만보기 = 0
input.onButtonPressed(Button.A, function () {
    만보기 = 0
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        # . # . .
        . # . . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        # # . # #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(2000)
    music.playMelody("C5 B A G F E D C ", 100)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(0.6 * 만보기)
})

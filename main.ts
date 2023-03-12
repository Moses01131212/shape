//codeByMoses
// getShape
function getshape () {
    if (shape == 3) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (shape == 4) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            # . . . #
            # # # # #
            `)
    }
}
//start let
let position = 0
let shape = 0
// setGroup
radio.setGroup(2428)
function ramondIf () {
    if (position == 1) {
        radio.sendValue("M1", shape * 3)
        radio.sendValue("M2", randint(1, 25))
        radio.sendValue("M3", randint(1, 25))
        radio.sendNumber(1)
    } else if (position == 2) {
        radio.sendValue("M2", shape * 3)
        radio.sendValue("M1", randint(1, 25))
        radio.sendValue("M3", randint(1, 25))
        radio.sendNumber(2)
    } else if (position == 3) {
        radio.sendValue("M3", shape * 3)
        radio.sendValue("M2", randint(1, 25))
        radio.sendValue("M1", randint(1, 25))
        radio.sendNumber(3)
    }
}
// randomShape
loops.everyInterval(20000, function () {
    shape = randint(3, 5)
    getshape()
    position = randint(1, 3)
    ramondIf
})
//reset
radio.onReceivedNumber(function(receivedNumber: number) {
    control.reset()
})

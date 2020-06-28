radio.setGroup(1)
basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
basic.forever(function () {
    radio.sendValue("angle", input.acceleration(Dimension.Y))
})

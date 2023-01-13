input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Duck)
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Ghost)
})
basic.showString("HELLO HAVE A GREAT DAY")
basic.forever(function () {
    basic.showArrow(ArrowNames.NorthEast)
})

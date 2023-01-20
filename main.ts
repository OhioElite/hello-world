input.onButtonPressed(Button.A, function () {
    basic.showString("suiii")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("soccer")
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showString("eat sleep repeat")
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("messi")
})
input.onSound(DetectedSound.Quiet, function () {
    basic.showNumber(6)
})

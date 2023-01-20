input.onButtonPressed(Button.A, function () {
    basic.showString("what kind of shoes does a burglar wear......SNEAKERS")
})
input.onSound(DetectedSound.Loud, function () {
    basic.showNumber(6)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("dance to a fortnite song")
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showString("A b c d")
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("what is the most embarssing thing u have ever done ")
})

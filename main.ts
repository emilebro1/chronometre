let start = 0
let elipse = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    elipse = input.runningTime() - start
    basic.showNumber(elipse / 1000)
})
basic.forever(function () {
	
})

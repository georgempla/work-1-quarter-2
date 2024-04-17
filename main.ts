input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(90)
    spots += -1
    car_in += 1
})
input.onButtonPressed(Button.AB, function () {
    if (car_in > car_out) {
        garage_out()
    }
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(180)
})
function garage_out () {
    servos.P1.setAngle(90)
    spots += 1
    car_out += 1
    basic.pause(5000)
    basic.pause(5000)
    servos.P1.setAngle(180)
}
let car_out = 0
let car_in = 0
servos.P0.setAngle(180)
servos.P1.setAngle(180)
let spots = 9
basic.forever(function () {
    basic.showString("" + convertToText(car_in) + "-" + convertToText(car_out) + "-" + convertToText(spots))
})

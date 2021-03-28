control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendNumber(4)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendNumber(4)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    radio.sendNumber(3)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(5)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(6)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendNumber(4)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    radio.sendNumber(2)
})
radio.setGroup(105)

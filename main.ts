radio.onReceivedValue(function (name, value) {
    if (name == "pitch") {
        if (value < 35 && value > 0) {
            midi.channel(1).controlChange(1, Math.map(value, 0, 30, 0, 127))
        }
        if (value > 35) {
            midi.channel(1).controlChange(1, 127)
        }
        if (value < 2) {
            midi.channel(1).controlChange(1, 0)
        }
    }
    if (name == "roll") {
        if (value < 90 && value > -90) {
            midi.channel(1).controlChange(0, Math.map(value, -90, 90, 0, 127))
        }
        if (value > 90) {
            midi.channel(1).controlChange(0, 127)
        }
        if (value < -90) {
            midi.channel(1).controlChange(0, 0)
        }
    }
})
basic.showIcon(IconNames.Happy)
radio.setGroup(1)
midi.useRawSerial()
basic.forever(function () {
	
})

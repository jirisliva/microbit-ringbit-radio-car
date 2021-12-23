radio.onReceivedValue(function (name, value) {
    if (name == "vlevo") {
        vlevo = value
    } else if (name == "vpravo") {
        vpravo = value
    } else if (name == "plyn") {
        plyn = (0 - value) * 2.5
    } else if (name == "pauza") {
        pauza = value
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
let pauza = 0
let plyn = 0
let vpravo = 0
let vlevo = 0
radio.setGroup(1)
basic.forever(function () {
    if (pauza == 0) {
        RingbitCar.freestyle(vlevo + plyn, vpravo + plyn)
        basic.showIcon(IconNames.Happy)
    } else {
        RingbitCar.brake()
        basic.showIcon(IconNames.No)
    }
})

let LED_number = 0
let item = neopixel.create(DigitalPin.P1, 7, NeoPixelMode.RGB)
basic.forever(function () {
    LED_number = pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1000,
    0,
    7
    )
    item.clear()
    item.range(0, LED_number).showRainbow(1, 180)
    item.show()
})

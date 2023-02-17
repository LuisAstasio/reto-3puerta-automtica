let i = 0
neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 180)
basic.showLeds(`
    . . # . .
    . # # # .
    . # . # .
    # # # # #
    # . # . #
    `)
basic.pause(2000)
basic.showLeds(`
    . # # # .
    # . # . #
    # # . # #
    # . # . #
    . # # # .
    `)
basic.pause(5000)
basic.forever(function () {
    i = PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm)
    if (i > 3 == i < 20) {
        basic.showIcon(IconNames.Yes)
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 243)
        basic.pause(5000)
        music.playTone(932, music.beat(BeatFraction.Whole))
    } else {
        basic.showIcon(IconNames.No)
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 180)
        music.playTone(139, music.beat(BeatFraction.Whole))
    }
})

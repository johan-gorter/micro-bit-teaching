/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=200
namespace macarena {

  //% block
  export function staOp() {
      basic.showLeds(`
          . . . . .
          . . . . .
          . . . . .
          . . . . .
          # # # # #
          `)
  }

  //% block
  export function linkerHandNaarVoor() {
      basic.showLeds(`
          # . . . .
          # . . . .
          # . . . .
          # . . . .
          # # # # #
          `)
  }

  //% block
  export function rechterHandNaarVoor() {
      basic.showLeds(`
          # . . . #
          # . . . #
          # . . . #
          # . . . #
          # # # # #
          `, 1000)
  }

  //% block
  export function linkerHandHoek() {
      basic.showLeds(`
          . . . . #
          . . . . #
          # # # . #
          # . . . #
          # # # # #
          `, 1000)
  }

  //% block
  export function rechterHandHoek() {
      basic.showLeds(`
          . . . . .
          . . . . .
          # # # # #
          # . . . #
          # # # # #
          `, 1000)
  }

  //% block
  export function linkerHandAchterHoofd() {
      basic.showLeds(`
          . . # . .
          . # . . .
          # . # # #
          . # . . #
          . . # # #
          `, 1000)
  }

}
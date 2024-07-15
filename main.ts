input.onButtonPressed(Button.A, function () {
    Snake.turn(Direction.Left, 90)
})
input.onButtonPressed(Button.AB, function () {
    if (game.isRunning()) {
        game.pause()
    } else {
        game.resume()
    }
})
input.onButtonPressed(Button.B, function () {
    Snake.turn(Direction.Left, 90)
})
let Snake: game.LedSprite = null
Snake = game.createSprite(0, 0)
let apple = game.createSprite(1, 1)
basic.forever(function () {
    while (game.isRunning()) {
        basic.pause(1000)
        Snake.move(1)
    }
    while (apple.isTouching(Snake)) {
        apple = game.createSprite(randint(-3, 3), randint(-3, 3))
    }
})

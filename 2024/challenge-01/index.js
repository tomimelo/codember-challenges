class CodeCombination {
    #combination = []
    #currentPosition = 0

    constructor(rawCombination) {
        this.#combination = rawCombination.split('').map(c => Number(c))
    }

    applyMovement(movement) {
        switch (movement) {
            case 'R':
                return this.#moveRight()
            case 'L':
                return this.#moveLeft()
            case 'U':
                return this.#increase()
            case 'D':
                return this.#decrease()
            default:
                throw new Error(`Movement "${movement}" not valid`)
        }
    }

    extract() {
        return this.#combination.join('')
    }

    #moveRight() {
        this.#currentPosition = this.#addCyclically(this.#currentPosition, 1, this.#combination.length - 1)
    }

    #moveLeft() {
        this.#currentPosition = this.#addCyclically(this.#currentPosition, -1, this.#combination.length - 1)
    }

    #increase() {
        const currentValue = this.#combination.at(this.#currentPosition)
        this.#combination[this.#currentPosition] = this.#addCyclically(currentValue, 1, 9)
    }

    #decrease() {
        const currentValue = this.#combination.at(this.#currentPosition)
        this.#combination[this.#currentPosition] = this.#addCyclically(currentValue, -1, 9)
    }

    #addCyclically(value, change, max) {
        const range = max + 1;
        return ((value + change) % range + range) % range;
    }

}

function decode(code) {
    const [rawCombination, movements] = code.split(' ')
    const codeCombination = new CodeCombination(rawCombination)
    for (const movement of movements.split('')) {
        codeCombination.applyMovement(movement)
    }
    return codeCombination.extract()
}

function solver() {
    const code = '528934712834 URDURUDRUDLLLLUUDDUDUDUDLLRRRR'
    return `submit ${decode(code)}`
}

export const challenge01 = {
  name: "Challenge 01",
  solver,
};

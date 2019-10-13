class GuessingGame {
    constructor() {
        this.isGreater = true;
        this.value = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.value = Math.round((this.min + this.max)/2);
        return this.value;
    }

    lower() {
        this.isGreater = false;
        this.max = this.value;
    }

    greater() {
        this.isGreater = true;
        this.min = this.value;
    }
}

module.exports = GuessingGame;

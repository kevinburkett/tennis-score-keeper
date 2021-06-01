class Tennis {
    constructor(teamA, teamB) {
        this.A = new Team(teamA)
        this.B = new Team(teamB)
    }
    toString() {
        return JSON.stringify(this)
    }
    calc(points) {
        for (let i = 0; i < points.length; i++) {
            if (points[i] === 'A') {
                this.A.add(this.B)
            } else {
                this.B.add(this.A)
            }
        }
        return this
    }
}

class Team {
    score
    games
    #value
    constructor(teamArr) {
        this.score = (teamArr != undefined) ? teamArr[0] : Team.val(0)
        this.games = (teamArr != undefined) ? teamArr[1] : 0
        this.#value = (teamArr != undefined) ? Team.val(teamArr[0]) : 0
    }
    add (other) {
        this.#value++
        if (this.#value === 3 && other.#value === 3) {
            this.score = other.score = 'deuce'
        } else if (this.#value === 4 && other.#value === 3) {
            this.score = Team.val(4)
            other.score = ''
        } else if (this.#value === 4 && other.#value === 4) {
            this.score = other.score = 'deuce'
            this.#value = other.#value = 3
        } else if ((this.#value === 4 && other.#value < 3) || (this.#value === 5 && other.#value === 3)) {
            this.games++
            this.score = Team.val(0)
            this.#value = 0
            other.score = Team.val(0)
            other.#value = 0
        } else {
            this.score = Team.val(this.#value)
            other.score = Team.val(other.#value)
        }
    }
    static val(key) {
        const m = new Map([[0, 'love'], ['love', 0], [1, '15'], ['15', 1], [2, '30'], ['30', 2], [3, '40'], ['40', 3], [4, 'advantage'], ['advantage', 4]])
        return m.get(key)
    }
}


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
    #value
    constructor(teamArr) {
        this.score = (teamArr != undefined) ? teamArr[0] : Team.name(0)
        this.games = (teamArr != undefined) ? teamArr[1] : 0
        this.#value = (teamArr != undefined) ? Team.value(teamArr[0]) : 0
    }
    add (other) {
        this.#value++
        if (this.#value === 3 && other.#value === 3) {
            this.score = other.score = 'deuce'
        } else if (this.#value === 4 && other.#value === 3) {
            this.score = 'advantage'
            other.score = ''
        } else if (this.#value === 4 && other.#value === 4) {
            this.score = other.score = 'deuce'
            this.#value = other.#value = 3
        } else if ((this.#value === 4 && other.#value < 3) || (this.#value === 5 && other.#value === 3)) {
            this.games++
            this.score = Team.name(0)
            this.#value = 0
            other.score = Team.name(0)
            other.#value = 0
        } else {
            this.score = Team.name(this.#value)
            other.score = Team.name(other.#value)
        }
    }
    static value(name) {
        return (name === 'love') ? 0 : 
            (name === '15') ? 1 : 
            (name === '30') ? 2 : 
            (name === '40') ? 3 : 0
    }
    static name(value) {
        return (value === 0) ? 'love' : 
            (value === 1) ? '15' : 
            (value === 2) ? '30' : 
            (value === 3) ? '40' : ''
    }
}

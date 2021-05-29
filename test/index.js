describe('Tennis', () => {
    const message = ' has incorrect score'

    it('should be equal', () => {
        const points = '', tennis = new Tennis(), tennisTest = new Tennis(['love', 0], ['love', 0])
        assert.equal(tennis.calc(points).toString(), tennisTest.toString(), points + message)
    })

    it('should be equal', () => {
        const points = 'A', tennis = new Tennis(), tennisTest = new Tennis(['15', 0], ['love', 0])
        assert.equal(tennis.calc(points).toString(), tennisTest.toString(), points + message)
    })

    it('should be equal', () => {
        const points = 'BBB', tennis = new Tennis(), tennisTest = new Tennis(['love', 0], ['40', 0])
        assert.equal(tennis.calc(points).toString(), tennisTest.toString(), points + message)
    })

    it('should be equal', () => {
        const points = 'ABAB', tennis = new Tennis(), tennisTest = new Tennis(['30', 0], ['30', 0])
        assert.equal(tennis.calc(points).toString(), tennisTest.toString(), points + message)
    })

    it('should be equal', () => {
        const points = 'AAAA', tennis = new Tennis(), tennisTest = new Tennis(['love', 1], ['love', 0])
        assert.equal(tennis.calc(points).toString(), tennisTest.toString(), points + message)
    })

    it('should be equal', () => {
        const points = 'ABBBBBBBBBBBB', tennis = new Tennis(), tennisTest = new Tennis(['love', 0], ['love', 3])
        assert.equal(tennis.calc(points).toString(), tennisTest.toString(), points + message)
    })

    it('should be equal', () => {
        const points = 'BABBBA', tennis = new Tennis(), tennisTest = new Tennis(['15', 0], ['love', 1])
        assert.equal(tennis.calc(points).toString(), tennisTest.toString(), points + message)
    })

    it('should be equal', () => {
        const points = 'AAABBB', tennis = new Tennis(), tennisTest = new Tennis(['deuce', 0], ['deuce', 0])
        assert.equal(tennis.calc(points).toString(), tennisTest.toString(), points + message)
    })

    it('should be equal', () => {
        const points = 'AAABBBA', tennis = new Tennis(), tennisTest = new Tennis(['advantage', 0], ['', 0])
        assert.equal(tennis.calc(points).toString(), tennisTest.toString(), points + message)
    })

    it('should be equal', () => {
        const points = 'AAABBBAB', tennis = new Tennis(), tennisTest = new Tennis(['deuce', 0], ['deuce', 0])
        assert.equal(tennis.calc(points).toString(), tennisTest.toString(), points + message)
    })

    it('should be equal', () => {
        const points = 'AAABBBABB', tennis = new Tennis(), tennisTest = new Tennis(['', 0], ['advantage', 0])
        assert.equal(tennis.calc(points).toString(), tennisTest.toString(), points + message)
    })

    it('should be equal', () => {
        const points = 'AAABBBABBB', tennis = new Tennis(), tennisTest = new Tennis(['love', 0], ['love', 1])
        assert.equal(tennis.calc(points).toString(), tennisTest.toString(), points + message)
    })
})

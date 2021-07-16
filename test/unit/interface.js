const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const ergogen = require('../../src/ergogen')

// fixtures
const load = name => yaml.safeLoad(fs.readFileSync(
    path.join(__dirname, `../fixtures/${name}`)
).toString())
const minimal = load('minimal.yaml')
const big = load('big.yaml')
const kle = load('atreus_kle.json')

describe('Interface', function() {

    this.timeout(120000)
    this.slow(120000)

    it('debug', async function() {
        // to check whether the output has "private" exports
        const underscore = obj => {
            for (const val of Object.values(obj)) {
                for (const key of Object.keys(val)) {
                    if (key.startsWith('_')) return true
                }
            }
            return false
        }
        underscore(await ergogen.process(minimal)).should.be.false
        underscore(await ergogen.process(big, false)).should.be.false
        underscore(await ergogen.process(big, true)).should.be.true
    })

    it('formats', async function() {
        const logger = msg => {
            if (msg.startsWith('Interpreting format:')) {
                throw msg.split(':')[1].trim()
            }
        }
        return Promise.all([
            ergogen.process(minimal, true, logger).should.be.rejectedWith('OBJ'),
            ergogen.process(yaml.dump(minimal), true, logger).should.be.rejectedWith('YAML'),
            ergogen.process(`
                //:
                return {points: {}}
            `, true, logger).should.be.rejectedWith('JS'),
            ergogen.process(`
                //:
                return 'not an object';
            `, true, logger).should.be.rejectedWith('not valid'),
            ergogen.process(kle, true, logger).should.be.rejectedWith('KLE'),
            ergogen.process('not an object', true, logger).should.be.rejectedWith('object'),
            ergogen.process({}, true, logger).should.be.rejectedWith('empty'),
            ergogen.process({not_points: {}}, true, () => {}).should.be.rejectedWith('any points')
        ])
    })
    
})
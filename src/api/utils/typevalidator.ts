import * as io from 'io-ts'

const document = io.type({
    city: io.string,
    time: io.string,
    temperature: io.number
  })

export const doc: Idocument = {
    city: "paris",
    time: "did",
    temperature: 50
}

interface Idocument extends io.TypeOf<typeof document> {}
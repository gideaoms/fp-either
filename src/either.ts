interface Left<E> {
    readonly _tag: 'Left'
    readonly left: E
}

interface Right<A> {
    readonly _tag: 'Right'
    readonly right: A
}

type Either<E, A> = Left<E> | Right<A>

const isLeft = <E, A>(ma: Either<E, A>): ma is Left<E> => ma._tag === 'Left'

const isRight = <E, A>(ma: Either<E, A>): ma is Right<A> => ma._tag === 'Right'

const left = <E = never, A = never>(e: E): Either<E, A> => ({ _tag: 'Left', left: e })

const right = <E = never, A = never>(a: A): Either<E, A> => ({ _tag: 'Right', right: a })

export { Left, Right, Either, isLeft, isRight, left, right }
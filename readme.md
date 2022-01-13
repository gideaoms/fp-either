# fp-either
```ts
import { Either, isLeft } from 'fp-either'
import { User } from './User'

const findUser = async (userId: number): Promise<Either<Error, User>> => {
    ...
}

const main = async () => {
  const foundUser = await findUser(1)
  if (isLeft(foundUser)) return left(foundUser.left)
  console.log(foundUser.right)
}
```

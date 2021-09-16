# fp-either
```ts
import { Either, isLeft } from 'fp-either'
import { User } from './User'

const findUser = async (userId: number): Promise<Either<Error | User>> => {
    ...
}

const main = async () => {
  const foundUserOrError = await findUser(1)
  if (isLeft(foundUserOrError)) {
      const error = foundUserOrError.left
      return error
  }
  const foundUser = foundUserOrError.right
  ...
}
```

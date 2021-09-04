# Task 3

###### [switch to the the russian documentation](./README.ru.md)

## Description📌

`MainComponent` doesn't receive incoming props and it always has a default props.    
`ChildComponent` is memoized by `React.memo` *HOC*, but this memoization is not working cause `ChildComponent` still always makes rererndering(updating) even if its `props` values haven't changed.

## TODO📝

Make `ChildComponent`'s memoization works.

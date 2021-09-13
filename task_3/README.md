# Task 3

###### [switch to the the russian documentation](./README.ru.md)

## Description📌

`MainComponent` has default `props`.    
`ChildComponent` is memoized by `React.memo` *HOC*, but this memoization doesn't work when `ChildComponent` always receives `MainComponent`'s default `props`.

## TODO📝

Make `ChildComponent`'s memoization works **even when `ChildComponent` receives `MainComponent`'s default `props`**

## Conditions❗️

 * without using class components

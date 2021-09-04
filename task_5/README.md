# Task 5

###### [switch to the the russian documentation](./README.ru.md)

## Description📌

`MainComponent` subscribed on *Redux* `userData` selector.    
`MainComponent` always makes rerendering(updating) when the state changes, **even** if **only** the `isOnline` selector has changed and `userData` selector remains unchanged.

## TODO📝

Rebuild the code so that the `MainComponent` should be updated **only when** the `userData` selector changes.

## Conditions❗️

 * don't change *Redux* state object model
 * `MainComponent` should be still subscribed only on `userData` selector

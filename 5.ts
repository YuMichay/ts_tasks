// 5. https://www.typescriptlang.org/play/?#code/PQKgBI6CCAwggsIFjiIFMheECofhBAcIIQRAqCEQQMiBi4ZpgyDcIIPIgYAtgJ4CCAJkwKIBuApgHYAuAMgEsAzrx6cATgBow8XID4QQIwggaRAw85GEWABECjkiJMlTAALAIbcmAG0kzATCBhA7CBRb2DIB4QeVmJrcYXnQAHTikAKDBwwC4QeQUtZUBWEDVFeQdUeDjkVXsOHl4AWVMAkLDwsABGADo-QM4wQBwQeUA2EDjfFQIieXJ8KLAI8kA5EEQ3DDAMBzBsvnzCkrAAJkqzC2sJMEBZEAV9UkAREEBhEGQIwDEQDGGseWjbZq9bHb7ASRA4wE4QKqCRsYm8gqLi+mY2Lj4hKJxBIABQAcgA9twAMoAVwARjRBLwwTIAJTFQBEIAYYB0mhpWoQQZx-rwAFxgOGI5HvNFgAC8AD4wOwIYImEVwj8WO9AWJuJJwVCAMKWQQAYwA1qiwBjwtjSLjyPjNMo2sTSRTchDYcJOLSGczWeywiBgEVBHxJAAzUzimrvKZgADexRFYqlFI1OS1Or1BqZLLZHPCUIAKjrxcYvSSfWAI7CowGjcG3TCEUjyWBvXwKVTM8mgyaAL5gIriqGiWiMHmkvnAhnZ-xBCmYwBIIIA8EEAmCBgTGADBBAPggMkWVkkrc7Pf7A7pgedxaK3L+OXrAtBkPT1JR6JCi95In5gvXCajMoxu7r++BQu4ool0vRQA

/* Задача написать тип для myAddEventListener, чтобы он брал тип для handler, в зависимости от type,
  которые обозначены в EventMap

  1. type Может быть только ключами из EventMap
  2. handler это тип функции соответствующей type из EventMap


myAddEventListener('onSubmit', )
Тип должен быть (event: SubmitEvent) => void

myAddEventListener('onClick', )
Тип должен быть (event: MouseEvent) => void
*/

interface EventMap {
  onClick: (event: MouseEvent) => void
  onTouch: (event: TouchEvent) => void
  onSubmit: (event: SubmitEvent) => void
} 

type Handler<T extends keyof EventMap> = EventMap[T];

const myAddEventListener = <T extends keyof EventMap>(type: T, handler: Handler<T>) => {
  console.log(type, handler);
}

myAddEventListener('onSubmit', )
myAddEventListener('onTouch', )
myAddEventListener('onClick', )
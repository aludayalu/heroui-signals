import { Signal } from "@aludayalu/signals"
import { Button } from "@heroui/button"

function Component() {
    var [count, setCount] = Signal("count", 0)
    return (
       <Button onPress={() => {
            setCount(count + 1)
        }}>{count} Update</Button>
    )
}

export default function App() {
    var [count, _] = Signal("count", 0)
    return (
        <>
        <div>Counter: {count}</div>
        <Component></Component>
        {count == 14 && <Component></Component>}
        </>
    )
}
// UI фичи не уходит в shared потому что невозможно использовать повторно
export function ToggleTaskButton({done, onClick}) {
    return (
        <button onClick={onClick}>
            {done ? "Done" : "Done"}
        </button>
    )
}
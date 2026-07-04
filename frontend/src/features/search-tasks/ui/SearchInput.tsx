type Props = {
    value: string;
    onChange: (value: string) => void;
};

export function SearchInput({ value, onChange }: Props) {
    return (
        <input
            type="text"
            placeholder="Поиск задач..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}
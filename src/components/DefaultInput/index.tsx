type DefaultInput = {
    // union type
    // type: 'text' | 'number' | 'search'
    id: string;
} & React.ComponentProps<'input'>; // intersection

export function DefaultInput({ id, type }: DefaultInput) {
    return (
        <>
            <label htmlFor={id}>task</label>
            <input id={id} type={type} />
        </>
    )
}
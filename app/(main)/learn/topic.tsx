type Props = {
    id: number,
    order: number,
    title: string
    content: string,
};

export const Topic = ({
    title,
    content,
}:Props) => {

    return(
        <>
            <div>{title}</div>
            <div>{content}</div>
        </>
    )
}
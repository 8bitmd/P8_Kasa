import "./tags.css"

export const Tags = ({tags}) => {
    return (
        <div className={"tags"}>
            {
                tags.map(tag => (<p key={tag}>{tag}</p>))
            }
        </div>
    )
}

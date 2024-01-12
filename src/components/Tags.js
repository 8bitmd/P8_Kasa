import "../styles/tags.css"

/**
 * Renders a list of tags
 *
 * @param tags {string[]} List of tags names
 */
export const Tags = ({tags}) => {
    return (
        <div className={"tags"}>
            {
                tags.map(tag => (<p key={tag}>{tag}</p>))
            }
        </div>
    )
}

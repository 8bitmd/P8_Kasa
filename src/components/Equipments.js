import "../styles/equipments.css"

export const Equipments = ({equips}) => {
    return (
        <ul className={"equipments"}>
            {
                equips.map(equip => (<li key={equip}>{equip}</li>))
            }
        </ul>
    )
}

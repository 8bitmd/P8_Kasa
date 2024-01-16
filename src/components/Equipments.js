import "../styles/equipments.css"

export const Equipments = ({equips}) => {
    return (
        <div className={"equipments"}>
            {
                equips.map(equip => (<p key={equip}>{equip}</p>))
            }
        </div>
    )
}

import { useEffect, useState } from "react";

const MyCombos = () => {
    const [myCombos,setMyCombos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let res = await fetch("http://localhost:3000/userCombos")
            let myCombos = await res.json();
            setMyCombos(myCombos);
          };
        fetchData();
        }, [])

    const renderMyComboList = myCombos.map((combo) => {
        return (
            <div className="user-combo-list">
                <ul>{combo.name}</ul>
            </div>
        )
    })
    return(
        <div className="user-combos">
            <h3 class="my-4 text-3xl md:text-6xl text-red-500 font-bold leading-tight text-center md:text-center"> My Combos </h3>
            {renderMyComboList}
        </div>
        );  
    };

    export default MyCombos;
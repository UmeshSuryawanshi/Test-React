import { useState, useEffect } from "react";
import { RES_MENU_CARD } from "./constants";

const useRestaurantMenu = (resId) => {

    const[resInfo, setResInfo] = useState(null);

    useEffect(()=>{ fetchData(); }, []);

    const fetchData = async () => {
        const data = await fetch(RES_MENU_CARD + resId );
        const jsonData = await data.json();
        //console.log(jsonData);
        setResInfo(jsonData.data);
    }

    return resInfo;
}

export default useRestaurantMenu;
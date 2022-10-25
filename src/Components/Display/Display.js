import { useEffect, useState } from "react";
import List from "../Common/List";
import { checkStatus, pareJSON } from "../Utils";

const Display = () => {
    let [data, setData] = useState([]);

    useEffect(() => {
        const getCatFactList = async (numberOfList) => {
            let catPromiseList = []
            for (let i = 0; i < numberOfList; i++) {
                catPromiseList.push(getCatFacts());
            }
            let catFactList = await Promise.all(catPromiseList);
            setData(catFactList);
        }
        getCatFactList(10)
    }, [])

    const getCatFacts = async () => {
        try {
            let response = await fetch('https://catfact.ninja/fact');
            response = checkStatus(response);
            response = await pareJSON(response);
            return response.fact
        } catch (err) {
        }
    }

    return (
        <div className="display-wrapper">
            <h1 className="list-title">Cat facts</h1>
            {data.length > 0 ? <List data={data} /> : <span>...Loading</span>}
        </div>
    )
}

export default Display;
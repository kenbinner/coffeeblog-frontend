import React, {useEffect, useState} from 'react';
import Entry from './components/Entry';
import axios from 'axios';

type Entry = {
    entryId: number;
    entryTitle: string;
    entryDate: string;
    entryText: string;
}

const Home: React.FC = () => {
    const [entryList, setEntryList] = useState<Entry[]>([]);

    useEffect(() => {
        axios
            .get("http://localhost:4000/entryList")
            .then((response) => {
                console.log(response.data);
                setEntryList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    // const entryList: Entry[] = [
    //     {
    //         entryId: 1,
    //         entryDate: "02/01/2026",
    //         entryTitle: "My First Blog Entry",
    //         entryText: "Hello world, this is my first blog entry"
    //     },
    //     {
    //         entryId: 2,
    //         entryDate: "02/01/2026",
    //         entryTitle: "My Second Blog Entry",
    //         entryText: "Hello world, this is my first blog entry"
    //     }
    // ]

    return (
        <div>
            Inside Home
            <br />
            <br />
            <h2>Blog:</h2>
            <table>
                <tbody>
                    {entryList.map((entry) => {
                        return(
                            <tr key={entry.entryId}>
                                <td style={{borderStyle:'solid', padding:'10px'}}>
                                    <Entry
                                        entryId={entry.entryId}
                                        entryDate={entry.entryDate}
                                        entryTitle={entry.entryTitle}
                                        entryText={entry.entryText}
                                    />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
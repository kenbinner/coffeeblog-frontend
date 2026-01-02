import React from 'react';

type EntryProps = {
    entryId: number;
    entryTitle: string;
    entryDate: string;
    entryText: string;
}

const Entry : React.FC<EntryProps> = (EntryProps) => {

    return(
        <div>
            #{EntryProps.entryId}, Date: {EntryProps.entryDate}
            <h3>{EntryProps.entryTitle}</h3>
            <p>{EntryProps.entryText}</p> 
        </div>
    )
}

export default Entry;
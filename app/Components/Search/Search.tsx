'use client'
import React, { ChangeEvent, useState } from 'react';

export type SearchProps = {
    onSearch: (value: string) => void
}

const Search = (props: SearchProps) => {
    const { onSearch } = props;
    const [value, setValue] = useState('Enter search...');

    const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        setValue(target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            // Here, we call the onSearch function and pass the value
            onSearch(value);
        }
    };

    return (
        <div className="relative w-full text-gray-600">
            <input
                type="search"
                name="search"
                placeholder={value}
                className="bg-black h-10 px-5 pr-10 w-full rounded-full text-sm focus:outline-none"
                onChange={(event) => searchHandler(event)}
                onKeyDown={handleKeyDown}
            />
           <button
          type="submit"
          className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-600 rounded-full"
        >
          Search
        </button>
        </div>
    );
};

export default Search;
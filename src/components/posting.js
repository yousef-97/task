import React from 'react';

export default function Posting(props){
    return (
        <>
            <form>
                <textarea placeholder='share your thoughts'></textarea>
                <button>POST</button>
            </form>
        </>
    );
}
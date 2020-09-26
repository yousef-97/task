import React from 'react';

export default function Posting(props){
    return (
        <>
            <form>
                <br/>
                <h3>share your thoughts</h3>
                <textarea placeholder='share your thoughts'></textarea><br/>
                <button>POST</button>
            </form>
        </>
    );
}
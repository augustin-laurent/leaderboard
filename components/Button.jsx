"use client";

export function Button({ text }) {
    return(
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">{ text }</button>
    );
}
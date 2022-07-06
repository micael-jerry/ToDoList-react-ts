import {todo} from "../todo";
import './List.css' ;
import React from "react";

export const List: React.FC<{ items: todo[],listLabel?:string,listNumber:number,removeToList:any }> = ({items,listLabel,listNumber,removeToList}) => {
    return (
        <div className={"list p-4"} >
            <h2 >{listLabel}</h2>
            <ul className={"list-group"}>
                {items.map((item: todo) => (
                    <li className={"list-group-item"} key={item.title} onClick={() => {
                        removeToList(items.indexOf(item),item,listNumber) ;
                    }} >
                        <h3>{item.title}</h3>
                        <h5>{item.description}</h5>
                    </li>
                ))}
            </ul>
        </div>
    )
}
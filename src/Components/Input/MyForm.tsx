import './MyForm.css' ;
import {useEffect, useState} from "react";
import {todo} from "../todo";
import React from "react";

export const MyForm: React.FC<{ addToList: any,value:todo }> = ({addToList,value}) => {
    let [state, setState] = useState<todo>({
        title: "",
        description: ""
    });

    useEffect(() => {
        setState(value);
    },[value]) ;

    function handleChange(event: any) {
        const id = event.target.id;
        setState((state): todo => {
            return {
                ...state,
                [id]: event.target.value
            }
        })
    }

    function add(value: todo,listNumber:number): void {
        addToList(value,listNumber);
        setState({
            title: "",
            description: ""
        })
    }

    return (
        <div>
            <div className={"row"}>
                <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="form-floating mb-4">
                        <input type={"text"} className={"form-control"} id={"title"} value={state.title} onChange={handleChange}/>
                        <label htmlFor={"title"}>Title</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input type="text" className={"form-control"} id={"description"} value={state.description} onChange={handleChange}/>
                        <label htmlFor={"description"}>Description</label>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <button className="w-75 btn btn-lg  my-btn mb-3" onClick={() => {add(state,1);}}>tasks 1</button>
                    <button className="w-75 btn btn-lg  my-btn mb-3" onClick={() => {add(state,2);}}>tasks 2</button>
                    <button className="w-75 btn btn-lg  my-btn mb-3" onClick={() => {add(state,3);}}>tasks 3</button>
                </div>
            </div>
        </div>
    )
}
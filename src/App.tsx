import React, {useState} from 'react';
import './App.css';
import {MyForm} from "./Components/Input/MyForm";
import {todo} from "./Components/todo";
import {List} from "./Components/List/List";

function App() {
    let [todoListOne, setTodoListOne] = useState<todo[]>([]);
    let [todoListTwo, setTodoListTwo] = useState<todo[]>([]);
    let [todoListThree, setTodoListThree] = useState<todo[]>([]);
    let [formValue, setFormValue] = useState<todo>({
        title: "",
        description: ""
    });

    function addToList(item: todo, listNumber: number): void {
        switch (listNumber) {
            case 1 : {
                setTodoListOne((state) => {
                    return [...state, item]
                });
                break;
            }
            case 2 : {
                setTodoListTwo((state) => {
                    return [...state, item]
                });
                break;
            }
            case 3 : {
                setTodoListThree((state) => {
                    return [...state, item]
                });
                break;
            }
        }
    }

    function removeToList(index: number, item: todo, listNumber: number): void {
        switch (listNumber) {
            case 1: {
                setTodoListOne((state) => {
                    let newValue: todo[] = [];
                    state.forEach((item: todo): void => {
                        if (state.indexOf(item) !== index) (
                            newValue.push(item)
                        )
                    })
                    return [...newValue];
                })
                break;
            }
            case 2: {
                setTodoListTwo((state) => {
                    let newValue: todo[] = [];
                    state.forEach((item: todo): void => {
                        if (state.indexOf(item) !== index) (
                            newValue.push(item)
                        )
                    })
                    return [...newValue];
                })
                break;
            }
            case 3: {
                setTodoListThree((state) => {
                    let newValue: todo[] = [];
                    state.forEach((item: todo): void => {
                        if (state.indexOf(item) !== index) (
                            newValue.push(item)
                        )
                    })
                    return [...newValue];
                })
                break;
            }
        }
        setFormValue(item);
    }

    return (
        <div className="App">
            <header className="p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h1>ToDo List</h1>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container mt-4">
                <h2>Add Items</h2>
                <MyForm addToList={addToList} value={formValue}/>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <List items={todoListOne} listNumber={1} removeToList={removeToList} listLabel={"Lists 1"}/>
                    <List items={todoListTwo} listNumber={2} removeToList={removeToList} listLabel={"Lists 2"}/>
                    <List items={todoListThree} listNumber={3} removeToList={removeToList} listLabel={"List 3"}/>
                </div>
            </div>
        </div>
    );
}

export default App;
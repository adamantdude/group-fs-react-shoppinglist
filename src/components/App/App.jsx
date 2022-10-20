import React from 'react';
import {useState,useEffect} from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import axios from 'axios';
import AddItem from '../AddItem/AddItem.jsx';
import GroceryList from '../GroceryList/GroceryList.jsx';


function App() {

    let [groceryList,setGroceryList] = useState([]);

    useEffect(()=>{
        getItems();
    },[]);

    const addItem = (item) => {
        axios({
            method: 'POST',
            url: '/LIST',
            data: item
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const getItems = ()=>{
        axios({
            method: 'GET',
            url: '/LIST'
        })
        .then((response)=>{
            setGroceryList(response.data);
            console.log('got items', response.data);
        })
        .catch((err)=>{
            console.error('error in axios GET',err);
        });
    };

    const resetItems = ()=>{
        console.log('works');
        axios({
            method: 'PUT',
            url: `/LIST`,
        })
            .then(res => {
                console.log(res);
                getItems();
            })
            .catch(err => {
                console.log(err);
            });
    };

    const onClear = ()=>{
        console.log('works');
        axios({
            method: 'DELETE',
            url: `/LIST`,
        })
            .then(res => {
                console.log(res);
                getItems();
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
            </main>
            <AddItem addFn={addItem}/>
            <h2>Shopping List</h2>
            <button id ="resetButton" onClick={resetItems}>Reset</button>
            <button id="clearButton" onClick={onClear}>Clear</button>
            <GroceryList groceryList={groceryList} />
        </div>
    );
}

export default App;

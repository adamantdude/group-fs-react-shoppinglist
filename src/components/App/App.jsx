import React from 'react';
import {useState,useEffect} from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import axios from 'axios';
import AddItem from '../AddItem/AddItem.jsx';
import GroceryList from '../GroceryList/GroceryList.jsx';
import Swal2 from 'sweetalert2'

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
                if(res.status == 200)
                    alert(res.data);
                else
                    console.log(res);
                getItems();
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

    const buyItem = (id) => {
        axios({
            method: 'PUT',
            url: `/LIST/${id}`
        })
            .then(res => {
                console.log(res);
                getItems();
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    const resetItems = ()=>{
        console.log('works');
        
        Swal2.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, reset it!'
          }).then((result) => {
            if (result.isConfirmed) {
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
            }
          });

        
    };

    const removeItem = (id) => {
        axios({
            method: 'DELETE',
            url: `/LIST/${id}`
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

        Swal2.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
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
            }
          })

        
        
    };

    const editItem = (editParse) => {
        axios({
            method: 'PUT',
            url: `/LIST/edit/${editParse.id}`,
            data: editParse
        })
            .then(res => {
                console.log(res);
                getItems();
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="App">
            <Header />
            <AddItem addFn={addItem}/>
            <h2>Shopping List</h2>
            <div className="buttons">
                <button id ="resetButton" onClick={resetItems}>Reset</button>
                <button id="clearButton" onClick={onClear}>Clear</button>
            </div>
            <GroceryList groceryList={groceryList} buyFN={buyItem} removeFN={removeItem} editFN={editItem}/>
        </div>
    );
}

export default App;

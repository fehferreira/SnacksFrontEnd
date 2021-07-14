import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from './components/layout'
import Form from './components/form'
import LayoutList from './components/list'
import LayoutAusentList from './components/list/index-ausent'
import moment from 'moment'

function App() {
  const [list, setList] = useState([])
  const [ausentlist, setAusentList] = useState([])
  const [dateWork,setDateWork] = useState('')
  const [dateLastWork,setLastDateWork] = useState('')
  const [newEmployee, setNewEmployee] = useState('')
  const [updateList, setUpdateList] = useState(false)

  useEffect(() => {
    getListEmployee();
    getListAusentEmployee();
    getDateWork();
  }, [updateList])

  const postCreateEmployee = async () => {
    try {
      const response = await axios.post('http://localhost:8080/employee', {
        name: newEmployee,
        isWorking:false,
        isAusent:false
      })
      setUpdateList(true)
    } catch(error) {
      console.log(error)
    }
  }

  const getStartWork = async () => {
    try {
      const response = await axios.get('http://localhost:8080/work/start')
      setUpdateList(true)
    } catch(error) {
      console.log(error)
    }
  }

  const getDateWork = async () => {
    try {
      const response = await axios.get('http://localhost:8080/work/actual')
      setUpdateList(false)
      setDateWork(moment(response.data.dateStartWork).format('DD/MM/YYYY'))
      setLastDateWork(moment(response.dateStartWork).add(7,'d').format('DD/MM/YYYY'))
    } catch(error) {
      console.log(error)
    }
  }

  const getListEmployee = async () => {
    try {
      const response = await axios.get('http://localhost:8080/employee/present')
      setUpdateList(false)
      setList(response.data)
    } catch(error) {
      console.log(error)
    }
  }

  const getListAusentEmployee = async () => {
    try {
      const response = await axios.get('http://localhost:8080/employee/ausent')
      setUpdateList(false)
      console.log(response)
      setAusentList(response.data)
    } catch(error) {
      console.log(error)
    }
  }

  const handleStart = (e) => {
    e.preventDefault();
    getStartWork();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postCreateEmployee();
  }

  const handleChange = (e) => {
    setNewEmployee(e.target.value)
  }

  const handleDeleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/employee/${id}`)
      setUpdateList(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handleCheck = async (item) => {
    try {
      await axios.put(`http://localhost:8080/work/ausent/${item.id}`)
      setUpdateList(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Layout>
          <Form handleSubmit={handleSubmit} handleStart={handleStart} handleChange={handleChange} newEmployee={newEmployee} />
          <div className="title">{dateWork} - {dateLastWork}</div>
          <LayoutList list={list} handleDeleteEmployee={handleDeleteEmployee} handleCheck={handleCheck} />
          <LayoutAusentList list={ausentlist} handleDeleteEmployee={handleDeleteEmployee} handleCheck={handleCheck} />
        </Layout>
      </header>
    </div>
  );
}

export default App;

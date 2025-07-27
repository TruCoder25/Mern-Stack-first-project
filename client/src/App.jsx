import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import { Route, Routes } from 'react-router-dom'
import AuthPage from './pages/auth'
import TasksPage from './pages/tasks'
import CommonLayout from './components/common-layout'
import ScrumBoardPage from './pages/scrum-board'

function App() {
    return (
       <Routes>
            <Route path="/auth" element={<AuthPage/>}/>
            <Route path='/tasks' element={<CommonLayout/>}>
                <Route path='list' element={<TasksPage/>}/>
                <Route path='scrumboard' element={<ScrumBoardPage/>}/>
            </Route>
       </Routes>
    );
}

export default App

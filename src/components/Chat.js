import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ChatEngine } from 'react-chat-engine'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { auth } from './firebase'

function Chat() {
    const history=useHistory()
    const {user}=useAuth()
    const [loading, setLoading] = useState(true)

    console.log(user);

    const handleLogout=async ()=>{
        await auth.signOut()
        history.push('/')
    }

    console.log(user);

    const getFile=async(url)=>{
        const response=await fetch(url)
        const data=await response.blob()
        return new File([data],'userPhoto.jpg',{type:'image/jpeg'})
    }

    useEffect(()=>{
        if(!user){
            history.push('/')
            return;
        }
        axios.get('https://api.chatengine.io/users/me',{
            headers:{
                'project-id':process.env.PROJECT_ID,
                'user-name':user.email,
                'user-secret':user.uid
            }
        })
        .then(()=>{
            setLoading(false)
        })
        .catch(()=>{
            let formData=new FormData()
       
            formData.append('email',user.email)
            formData.append('username',user.email)
            formData.append('secret',user.uid);
            
            getFile(user.photoURL)
            .then((avatar)=>{
                formData.append('avatar',avatar,avatar.name)
                axios.post('https://api.chatengine.io/users/',
                formData,
                {
                    headers:{'private-key':process.env.PrivateKey}
                }
                )
                .then(()=>setLoading(false))
                .catch((error)=>console.log(error));
            })
        })
    },[user,history])

    if(!user || loading) return 'Loading...'

    return (
        <div className='chats-pages'>
            <div className="nav-bar">
                <div className="logo-tab">
                    Chit Chat
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>
            <ChatEngine
            height="calc(100vh-66px"
            projectID={process.env.PROJECT_ID}
            userName={user.email}
            userSecret={user.uid}
            />
        </div>
    )
}

export default Chat

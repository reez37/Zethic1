import './App.scss';
import {useEffect, useState} from 'react'
import axios from 'axios'
import {useSelector , useDispatch} from 'react-redux'
import { fetchdata } from './redux/reducer';


function App() {
  const computedata = useSelector(state => state.computedata.computedata)
  const dispatch = useDispatch();
  const [data, setData] = useState()
  const [input, setinput] = useState("")

  useEffect(() => {
    dispatch(fetchdata())

    // const fetchdata = async() => {
    //   try{
    //     const res = await axios.get("/api")
    //     setData(res.data.data)
    //   }catch(err){
    //       console.log(err)
    //   }
    // }


   
    // fetchdata()
    
  }, [dispatch])
 

  const handleclick = async(e) => {
    e.preventDefault()
    const idata = {
      input: input,
    }
    try {
      await axios.post("/", idata)  
      window.location.reload();
    } catch (err) {
    
    }
    
  }

 
  return (
    <div className='app'>
    <div className='navbar'>
      <div className='heading'>Robot Tester</div>
      <div className='reset'>Reset</div>
    </div>

    
    <div className="IObox">
    
    <div className='input'>
    <textarea
     value={input}
     type = "message"
     onChange = {(e)=> setinput(e.target.value)}
     />
     <button onClick={handleclick}> Test</button>
    </div>
     <div className='output'>
      {
        computedata?.data?.map((data,index) =>{
          return <div key={index} >Robot {index+1}: {data}</div>
        })
      }
      </div>
      </div>
    </div>
  );
}

export default App;

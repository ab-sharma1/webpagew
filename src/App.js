
import './App.css';

function App() {
  return (
    <div className= 'container'>

    {/* logo */}
    
     <div className='logo' >
     <img src={process.env.PUBLIC_URL + "/logo.png"} height="100px" alt="logo" ></img>
     </div>
    
    
    
     <div className='item1'>
     <img src={process.env.PUBLIC_URL + "/1.png"} height="600px" alt="logo"></img>
     </div>
    
    
     <div className='item2'>
      <p align =''>
               <b>
               C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
               </b>
               <ul>
                  <li align=''> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                  <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                </ul>
              </p>
    
              <img src={process.env.PUBLIC_URL + "/2.png"} height="460px" width=''alt="logo"></img>
            
    
            <p align ='center'>
    
              Government of India has awarded the <b> "National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
     </div>
     <div className='item3'>
     <p align ='center'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
    <div>
    <img src={process.env.PUBLIC_URL + "/3.png"} height="400px" alt="logo" align ='center'></img></div>
    <p align ='center'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
    <hr color='red'/>
    
     </div>
    
    <div className='item4'>
    <p align ='center'> <b> C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b></p>
              <p align ='center'>CHEMICALS & PROCESS  |  POWER | WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING  |HVAC | FIRE | FIGHTING | AGRICULTURE & RESIDENTIAL</p>
             
             
              <table  className='table'>
            <tr >
              <td  align='left' >Toll free 1800 200 1234 </td>
              <td  align='center'>www.facebook.com/cripumps</td>
              <td align='right'>www.cripumps.com</td>
            </tr>
          </table>
    </div>
    
    
    
    </div>
  );
}

export default App;

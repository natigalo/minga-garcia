import logom from "/assets/images/logoFooter.svg"
import asideimg from "/assets/images/asideWelcome.svg"
export default function SignIn({changeView, setChangeView}) {
    return(
        <main className="flex flex-col pt-20 items-center justify-center">
            <img src={asideimg} alt="" />
            <img src={logom} alt="logo" />
            <p>Welcome Back!</p>
            <p>discover</p>
            <h1 onClick={()=>setChangeView(!changeView)} >SINGIN</h1>
        </main>
        
            
    )
}
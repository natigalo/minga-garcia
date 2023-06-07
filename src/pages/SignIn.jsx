export default function SignIn({changeView, setChangeView}) {
    return(
        <main className="flex flex-col pt-20 items-center justify-center">
            <p>Welcome Back!</p>
            <p>discover</p>
            <h1 onClick={()=>setChangeView(!changeView)} >SINGIN</h1>
        </main>
        
            
    )
}
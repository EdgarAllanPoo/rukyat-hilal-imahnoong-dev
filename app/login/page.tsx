import "./login.css";

export default function Login() {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-white text-black">
            <div className="w-5/6">
                <div className="flex justify-center my-10 font-semibold text-3xl">
                    Login
                </div>
                <div className="login-btn h-9 bg-p-green font-semibold flex justify-center items-center">
                    LOGIN
                </div>
                <div className="flex justify-center my-10 font-semibold">
                    Forgot Password?
                </div>
                <div className="flex items-center">
                    <div className="w-1/4"><hr/></div>
                    <div className="flex justify-center w-2/4 text-slate-400">or continue with</div>
                    <div className="w-1/4"><hr/></div>
                </div>
                <div className="flex justify-center mt-20">
                    <p>Don't have account?</p> 
                    <p className="ml-1 font-semibold">Sign Up</p>
                </div>
            </div>
        </div>
    );
}
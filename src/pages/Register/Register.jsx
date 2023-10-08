import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext);


    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="hero min-h-[70vh]">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-[50px] text-[#3e3930] italic font-Cormorant">Please Register!!!</h1>
                </div>
                <div className="flex-shrink-0 w-full">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <input name="name" type="name" placeholder="name" className="input border-[#BDB5AA] rounded-none md:w-[500px] placeholder-[#BDB5AA]" required />
                        </div>
                        <div className="form-control">
                            <input name="email" type="email" placeholder="email" className="input border-[#BDB5AA] rounded-none md:w-[500px] placeholder-[#BDB5AA]" required />
                        </div>
                        <div className="form-control">
                            <input name="password" type="password" placeholder="password" className="input border-[#BDB5AA] rounded-none md:w-[500px] placeholder-[#BDB5AA]" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[white] text-[#776F60] hover:text-[white] hover:bg-[#BDB5AA] border-[#BDB5AA] rounded-none">Register</button>
                        </div>
                        <p className="text-[#BDB5AA]">Already have an account? <Link className="text-[#776F60] underline" to="/login">Login here</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
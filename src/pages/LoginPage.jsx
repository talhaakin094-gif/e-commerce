import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { loginUser } from "../store/clientSlice";
import { toast } from "react-toastify";
function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname;
    const onSubmit = async (data) => {
        try {
            await dispatch(loginUser(data, navigate, from));
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-[400px]">
                <input placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} className="border p-3 rounded"/>
                {errors.email && <p>Email invalid</p>}
                <input type="password" placeholder="Password"{...register("password", {required: true})} className="border p-3 rounded"/>
                <label className="flex gap-2">
                    <input type="checkbox" {...register("rememberMe")}/>Remember Me
                </label>
                <button type="submit" className="bg-blue-500 text-white p-3 rounded">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
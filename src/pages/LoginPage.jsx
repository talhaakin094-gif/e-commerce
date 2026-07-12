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
                <div className="mb-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4 shadow-sm">
                    <p className="font-semibold text-blue-800">Use the demo account to log in:</p>
                    <p className="mt-2 text-gray-700">
                        <strong>Email:</strong> customer@commerce.com
                    </p>
                    <p className="text-gray-700">
                        <strong>Password:</strong> 123456
                    </p>
                </div>
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
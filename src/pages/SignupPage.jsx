import { useEffect, useState } from "react";
import api from "../api/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function SignupPage() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [roles, setRoles] = useState([]);
    const selectedRole = watch("role_id");
    useEffect(() => {api.get("/roles").then((res) => {console.log(res.data); setRoles(res.data)}); }, [])
    const onSubmit = async (data) => { delete data.confirmPassword; try {setLoading(true); await api.post("/signup",data); alert("You need to click link in email to activate your account!"); navigate(-1);} catch (error) { console.log(error); setApiError(error.response.data.message); } finally {setLoading(false)}};
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState("");
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-[400px]">
                <input placeholder="Name" {...register("name", {required: true, minLength: 3})} className="border p-3 rounded"/>
                {errors.name && (<p>Name min 3 chars</p>)}
                <input placeholder="Email" {...register("email", {required: true})} className="border p-3 rounded"/>
                {errors.email && (<p>Email invalid</p>)}
                <input type="password" placeholder="Password" {...register("password", {required: true, pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.@$!%*?&]).{8,}$/, message: "Weak password"}})} className="border p-3 rounded"/>
                {errors.password && (<p>{errors.password.message}</p>)}
                <input type="password" placeholder="Confirm Password" {...register("confirmPassword", {required: true, validate: (value) => value === watch("password")})} className="border p-3 rounded"/>
                {errors.confirmPassword && (<p>Passwords not match</p>)}
                <select defaultValue="3" {...register("role_id")}>
                {roles.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.name}
                    </option>
                ))}
                </select>
                {selectedRole === "2" && (
                    <div>
                        <input placeholder="Store Name" {...register("store.name", {required: true, minLength: 3})}/>
                        <input placeholder="Phone" {...register("store.phone")}/>
                        <input placeholder="Tax No" {...register("store.tax_no")}/>
                        <input placeholder="IBAN" {...register("store.bank_account")}/>
                    </div>
                )}
                {apiError && (<p>{apiError}</p>)}
                <button type="submit" disabled={loading} className="bg-blue-500 text-white p-3 rounded">{loading ? "Loading..." : "Submit"}</button>
            </form>
        </div>
    )
}

export default SignupPage
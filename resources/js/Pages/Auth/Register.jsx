import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="loginBox">
                <img
                    className="user"
                    src="https://i.ibb.co/yVGxFPR/2.png"
                    alt="user"
                    height="100"
                    width="100"
                />
                <h3>Create an Account</h3>

                <form onSubmit={submit}>
                    {/* Name */}
                    <div className="inputBox">
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={data.name}
                            placeholder="Full Name"
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />
                        <InputError message={errors.name} className="text-danger small" />
                    </div>

                    {/* Email */}
                    <div className="inputBox">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            placeholder="Email"
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />
                        <InputError message={errors.email} className="text-danger small" />
                    </div>

                    {/* Password */}
                    <div className="inputBox">
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            placeholder="Password"
                            onChange={(e) => setData("password", e.target.value)}
                            required
                        />
                        <InputError message={errors.password} className="text-danger small" />
                    </div>

                    {/* Confirm Password */}
                    <div className="inputBox">
                        <input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            placeholder="Confirm Password"
                            onChange={(e) => setData("password_confirmation", e.target.value)}
                            required
                        />
                        <InputError message={errors.password_confirmation} className="text-danger small" />
                    </div>

                    {/* Button */}
                    <input type="submit" value="Register" disabled={processing} />
                </form>

                <div className="text-center mt-3">
                    <p style={{ color: "#59238F" }}>
                        Already have an account?{" "}
                        <Link href={route("login")}>Login</Link>
                    </p>
                </div>
            </div>
        </GuestLayout>
    );
}

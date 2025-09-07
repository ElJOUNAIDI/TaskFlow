import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <>
            <Head title="Login" />

            <div className="loginBox">
                <img
                    className="user"
                    src="https://i.ibb.co/yVGxFPR/2.png"
                    alt="user"
                    height="100"
                    width="100"
                />
                <h3>Sign in here</h3>

                {status && (
                    <div className="alert alert-success text-center">{status}</div>
                )}

                <form onSubmit={submit}>
                    <div className="inputBox">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            placeholder="Email"
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        {errors.email && (
                            <div className="text-danger small">{errors.email}</div>
                        )}

                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            placeholder="Password"
                            onChange={(e) => setData("password", e.target.value)}
                        />
                        {errors.password && (
                            <div className="text-danger small">{errors.password}</div>
                        )}
                    </div>

                    <input type="submit" value="Login" disabled={processing} />
                </form>

                {canResetPassword && (
                    <Link href={route("password.request")} className="mt-2">
                        Forget Password
                    </Link>
                )}

                <div className="text-center mt-3">
                    <Link href={route("register")}>
                        <p style={{ color: "#59238F" }}>Sign-Up</p>
                    </Link>
                </div>
            </div>
        </>
    );
}

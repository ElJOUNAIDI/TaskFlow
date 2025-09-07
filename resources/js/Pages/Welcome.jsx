import AppLayout from '@/Layouts/AppLayout';
import { Link } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <AppLayout title="Bienvenue">
            <div className="welcome-page d-flex flex-column justify-content-center align-items-center vh-100 text-center">
                <h1 className="display-1 fw-bold mb-4">🎉 Bienvenue</h1>
                <p className="lead mb-5">Découvrez votre application </p>
                <div className="login-buttons">
                    {auth.user ? (
                        <Link href={route('dashboard')} className="btn btn-primary btn-lg">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="btn btn-secondary btn-lg me-3">
                                Login
                            </Link>
                            <Link href={route('register')} className="btn btn-success btn-lg">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}

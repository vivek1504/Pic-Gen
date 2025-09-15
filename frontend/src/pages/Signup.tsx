import { useSignUp } from '@clerk/clerk-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Check, Eye, EyeOff, Loader2, Lock, Mail, User, X } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import AuthLayout from '@/components/AuthLayout';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { signupSchema, type SignupFormData } from '@/lib/auth-schemas';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { isLoaded, signUp, setActive } = useSignUp();

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { toast } = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            acceptTerms: false,
        },
    });

    const acceptTerms = watch('acceptTerms');
    const password = watch('password');

    // Password strength validation
    const getPasswordStrength = (pwd: string) => {
        const checks = {
            length: pwd.length >= 8,
            uppercase: /[A-Z]/.test(pwd),
            lowercase: /[a-z]/.test(pwd),
            number: /[0-9]/.test(pwd),
            special: /[^A-Za-z0-9]/.test(pwd),
        };

        const score = Object.values(checks).filter(Boolean).length;
        return { checks, score };
    };

    const { checks, score } = getPasswordStrength(password || '');

    const onSubmit = async (data: SignupFormData) => {
        if (!isLoaded) return;
        setIsLoading(true);

        try {
            // 1. Create the account
            const result = await signUp.create({
                emailAddress: data.email,
                password: data.password,
            });

            // 2. If Clerk requires email verification
            if (result.status !== "complete") {
                toast({
                    title: "Check your email",
                    description: "We've sent a verification link. Please verify to continue.",
                });
                return;
            }

            // 3. Activate the session
            await setActive({ session: result.createdSessionId });

            // 4. Update user profile with first/last name
            //@ts-ignore
            await result.user?.update({
                firstName: data.firstName,
                lastName: data.lastName,
            });

            toast({
                title: "Account created successfully!",
                description: "Welcome aboard 🎉",
            });

            navigate("/");
        } catch (err: any) {
            console.error(err);
            toast({
                variant: "destructive",
                title: "Registration failed",
                description: err.errors?.[0]?.message || "Something went wrong. Please try again.",
            });
        } finally {
            setIsLoading(false);
        }
    };



    return (
        <AuthLayout
            title="Create Account"
            subtitle="Join thousands of creators and start building amazing projects"
            linkText="Already have an account?"
            linkTo="/login"
            linkLabel="Sign in"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-2"
                    >
                        <Label htmlFor="firstName">First Name</Label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                                id="firstName"
                                type="text"
                                placeholder="John"
                                className="pl-10 h-12 bg-background/50 border-white/20 focus:border-primary/50 transition-all duration-300"
                                {...register('firstName')}
                            />
                        </div>
                        {errors.firstName && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-destructive text-sm"
                            >
                                {errors.firstName.message}
                            </motion.p>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="space-y-2"
                    >
                        <Label htmlFor="lastName">Last Name</Label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                                id="lastName"
                                type="text"
                                placeholder="Doe"
                                className="pl-10 h-12 bg-background/50 border-white/20 focus:border-primary/50 transition-all duration-300"
                                {...register('lastName')}
                            />
                        </div>
                        {errors.lastName && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-destructive text-sm"
                            >
                                {errors.lastName.message}
                            </motion.p>
                        )}
                    </motion.div>
                </div>

                {/* Email Field */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-2"
                >
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                            id="email"
                            type="email"
                            placeholder="john.doe@example.com"
                            className="pl-10 h-12 bg-background/50 border-white/20 focus:border-primary/50 transition-all duration-300"
                            {...register('email')}
                        />
                    </div>
                    {errors.email && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-destructive text-sm"
                        >
                            {errors.email.message}
                        </motion.p>
                    )}
                </motion.div>

                {/* Password Field */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="space-y-2"
                >
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Create a strong password"
                            className="pl-10 pr-12 h-12 bg-background/50 border-white/20 focus:border-primary/50 transition-all duration-300"
                            {...register('password')}
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <EyeOff className="w-5 h-5 text-muted-foreground" />
                            ) : (
                                <Eye className="w-5 h-5 text-muted-foreground" />
                            )}
                        </Button>
                    </div>

                    {/* Password Strength Indicator */}
                    {password && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-2"
                        >
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < score
                                            ? score <= 2
                                                ? 'bg-red-500'
                                                : score <= 3
                                                    ? 'bg-yellow-500'
                                                    : score <= 4
                                                        ? 'bg-blue-500'
                                                        : 'bg-green-500'
                                            : 'bg-white/20'
                                            }`}
                                    />
                                ))}
                            </div>
                            <div className="text-xs space-y-1">
                                {Object.entries(checks).map(([key, valid]) => (
                                    <div key={key} className="flex items-center gap-2">
                                        {valid ? (
                                            <Check className="w-3 h-3 text-green-500" />
                                        ) : (
                                            <X className="w-3 h-3 text-red-500" />
                                        )}
                                        <span className={`text-xs ${valid ? 'text-green-500' : 'text-red-500'}`}>
                                            {key === 'length' && '8+ characters'}
                                            {key === 'uppercase' && 'Uppercase letter'}
                                            {key === 'lowercase' && 'Lowercase letter'}
                                            {key === 'number' && 'Number'}
                                            {key === 'special' && 'Special character'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {errors.password && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-destructive text-sm"
                        >
                            {errors.password.message}
                        </motion.p>
                    )}
                </motion.div>

                {/* Confirm Password Field */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-2"
                >
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm your password"
                            className="pl-10 pr-12 h-12 bg-background/50 border-white/20 focus:border-primary/50 transition-all duration-300"
                            {...register('confirmPassword')}
                        />
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-transparent"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? (
                                <EyeOff className="w-5 h-5 text-muted-foreground" />
                            ) : (
                                <Eye className="w-5 h-5 text-muted-foreground" />
                            )}
                        </Button>
                    </div>
                    {errors.confirmPassword && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-destructive text-sm"
                        >
                            {errors.confirmPassword.message}
                        </motion.p>
                    )}
                </motion.div>

                {/* Terms and Conditions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="space-y-2"
                >
                    <div className="flex items-start space-x-2">
                        <Checkbox
                            id="acceptTerms"
                            checked={acceptTerms}
                            onCheckedChange={(checked) => setValue('acceptTerms', !!checked)}
                            className="border-white/30 mt-1"
                        />
                        <Label
                            htmlFor="acceptTerms"
                            className="text-sm text-muted-foreground cursor-pointer leading-relaxed"
                        >
                            I agree to the{' '}
                            <Button
                                type="button"
                                variant="link"
                                className="text-primary hover:text-primary/80 p-0 h-auto text-sm underline"
                                onClick={() => {
                                    toast({
                                        title: "Terms of Service",
                                        description: "Terms of Service modal would be implemented here.",
                                    });
                                }}
                            >
                                Terms of Service
                            </Button>
                            {' '}and{' '}
                            <Button
                                type="button"
                                variant="link"
                                className="text-primary hover:text-primary/80 p-0 h-auto text-sm underline"
                                onClick={() => {
                                    toast({
                                        title: "Privacy Policy",
                                        description: "Privacy Policy modal would be implemented here.",
                                    });
                                }}
                            >
                                Privacy Policy
                            </Button>
                        </Label>
                    </div>
                    {errors.acceptTerms && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-destructive text-sm"
                        >
                            {errors.acceptTerms.message}
                        </motion.p>
                    )}
                </motion.div>

                {/* Submit Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Button
                        type="submit"
                        disabled={isLoading || !acceptTerms}
                        className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                Creating account...
                            </>
                        ) : (
                            'Create Account'
                        )}
                    </Button>
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="relative"
                >
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-white/20" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">Or sign up with</span>
                    </div>
                </motion.div>

                {/* Social Signup Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="grid grid-cols-2 gap-3"
                >
                    <Button
                        type="button"
                        variant="outline"
                        className="h-12 border-white/20 hover:border-primary/50 transition-all duration-300"
                        onClick={() => {
                            toast({
                                title: "Google Sign Up",
                                description: "Google authentication would be implemented here.",
                            });
                        }}
                    >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Google
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        className="h-12 border-white/20 hover:border-primary/50 transition-all duration-300"
                        onClick={() => {
                            toast({
                                title: "GitHub Sign Up",
                                description: "GitHub authentication would be implemented here.",
                            });
                        }}
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                    </Button>
                </motion.div>
            </form>
        </AuthLayout>
    );
};

export default Signup;

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{email?: string; password?: string}>({});
  const { toast } = useToast();

  const validateForm = (): boolean => {
    const newErrors: {email?: string; password?: string} = {};
    
    if (!email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!password) {
      newErrors.password = 'Senha é obrigatória';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Campos inválidos",
        description: "Por favor, corrija os erros no formulário",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulando um login
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login realizado",
        description: "Bem-vindo ao sistema",
      });
    }, 1500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card className="w-full shadow-lg rounded-2xl border-border">
      <CardHeader className="space-y-2">
        <CardTitle className="text-xl font-semibold text-text">
          Acesso à Plataforma
        </CardTitle>
        <CardDescription className="text-base">
          Entre com suas credenciais para acessar o dashboard
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="space-y-1.5">
            <div>
              <Label htmlFor="email" className="text-sm font-medium mb-1.5 block">
                Email
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <User size={18} aria-hidden="true" />
                </span>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Seu email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({...errors, email: undefined});
                  }}
                  className="pl-10 h-12 rounded-xl transition-all border-border focus:border-atos-red/70 focus:ring focus:ring-atos-red/30"
                  disabled={isLoading}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  required
                />
              </div>
              {errors.email && (
                <p 
                  id="email-error" 
                  className="text-destructive text-sm mt-1" 
                  role="alert"
                  aria-live="polite"
                >
                  {errors.email}
                </p>
              )}
            </div>
            
            <div className="mt-4">
              <Label htmlFor="password" className="text-sm font-medium mb-1.5 block">
                Senha
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock size={18} aria-hidden="true" />
                </span>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Sua senha"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors({...errors, password: undefined});
                  }}
                  className="pl-10 h-12 rounded-xl transition-all border-border focus:border-atos-red/70 focus:ring focus:ring-atos-red/30"
                  disabled={isLoading}
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={errors.password ? "password-error" : undefined}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
                </button>
              </div>
              {errors.password && (
                <p 
                  id="password-error" 
                  className="text-destructive text-sm mt-1" 
                  role="alert"
                  aria-live="polite"
                >
                  {errors.password}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remember" 
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked === true)}
              />
              <Label 
                htmlFor="remember" 
                className="text-sm font-medium cursor-pointer select-none"
              >
                Lembrar-me
              </Label>
            </div>
            <button 
              type="button" 
              className="text-sm text-atos-red hover:text-atos-red/80 font-semibold"
            >
              Esqueci a senha
            </button>
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 bg-atos-red hover:bg-atos-red/90 transition-all text-base rounded-xl font-medium shadow-lg shadow-atos-red/20 hover:shadow-atos-red/30" 
            disabled={isLoading}
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </CardContent>
      
      <CardFooter className="flex justify-center pb-6">
        <p className="text-sm text-gray-600">
          Não tem conta? <a href="#" className="text-atos-red font-semibold hover:text-atos-red/80">Registre-se</a>
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;

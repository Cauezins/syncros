import { Link } from "react-router-dom";
import { useState } from "react";
import FormSignup from "./FormSignup";
import * as z from "zod";
import {
  CreditCard,
  Check,
  AlertCircle,
  Smartphone,
  QrCode,
  Receipt
} from "lucide-react";
import SetPlan from "./SetPlan";

function SignUpSection() {
  const [step, setStep] = useState(1);
  const [sliding, setSliding] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    newsletter: false,
  });
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });
  const [cardFlipped, setCardFlipped] = useState(false);

  const paymentMethods = [
    {
      id: "credit",
      name: "Cartão de Crédito",
      icon: CreditCard,
      description: "Parcele em até 12x",
    },
    {
      id: "debit",
      name: "Cartão de Débito",
      icon: Smartphone,
      description: "Débito à vista",
    },
    {
      id: "pix",
      name: "PIX",
      icon: QrCode,
      description: "Pagamento instantâneo",
    },
    {
      id: "boleto",
      name: "Boleto",
      icon: Receipt,
      description: "Vencimento em 3 dias úteis",
    },
  ];

  const plans = [
    {
      id: "basic",
      name: "Básico",
      price: 0,
      features: [
        "1 Projeto",
        "3 Usuários",
        "Suporte básico",
        "5GB Armazenamento",
      ],
    },
    {
      id: "pro",
      name: "Profissional",
      price: 29.9,
      features: [
        "5 Projetos",
        "10 Usuários",
        "Suporte prioritário",
        "20GB Armazenamento",
      ],
    },
    {
      id: "enterprise",
      name: "Empresarial",
      price: 59.9,
      features: [
        "Projetos ilimitados",
        "Usuários ilimitados",
        "Suporte 24/7",
        "100GB Armazenamento",
      ],
    },
  ];

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardDetails({ ...cardDetails, number: formattedValue });
  };

  const handleExpiryChange = (e) => {
    const formattedValue = formatExpiryDate(e.target.value);
    setCardDetails({ ...cardDetails, expiry: formattedValue });
  };

  const handleCVCFocus = () => {
    setCardFlipped(true);
  };

  const handleCVCBlur = () => {
    setCardFlipped(false);
  };

  const handleStepChange = (newStep) => {
    if (newStep > step) {
      setSliding("slide-left");
    } else {
      setSliding("slide-right");
    }

    setTimeout(() => {
      setStep(newStep);
      setSliding("");
    }, 300);
  };

  const handlePaymentMethodSelect = (methodId) => {
    setPaymentMethod(methodId);
    setErrors({ ...errors, paymentMethod: null });
  };

  // Função para validar o pagamento antes de finalizar
  const validatePayment = () => {
    if (!paymentMethod) {
      setErrors({
        ...errors,
        paymentMethod: "Selecione uma forma de pagamento",
      });
      return false;
    }

    if (
      (paymentMethod === "credit" || paymentMethod === "debit") &&
      getFinalPrice() > 0
    ) {
      if (
        !cardDetails.number ||
        !cardDetails.name ||
        !cardDetails.expiry ||
        !cardDetails.cvc
      ) {
        setErrors({ ...errors, card: "Preencha todos os dados do cartão" });
        return false;
      }
    }

    return true;
  };

  const applyCoupon = () => {
    setIsProcessing(true);
    setTimeout(() => {
      if (couponCode.toLowerCase() === "user100") {
        setCouponDiscount(100);
        setErrors({ ...errors, coupon: null });
      }else if (couponCode.toLowerCase() === "first50") {
        setCouponDiscount(50);
        setErrors({ ...errors, coupon: null });
      } else if (couponCode.toLowerCase() === "special20") {
        setCouponDiscount(20);
        setErrors({ ...errors, coupon: null });
      } else {
        setErrors({ ...errors, coupon: "Cupom inválido" });
        setCouponDiscount(0);
      }
      setIsProcessing(false);
    }, 1000);
  };

  const getFinalPrice = () => {
    if (!selectedPlan) return 0;
    const plan = plans.find((p) => p.id === selectedPlan);
    const discount = (plan.price * couponDiscount) / 100;
    return Math.max(0, plan.price - discount).toFixed(2);
  };

  const handleSubmit = () => {
    if (validatePayment()) {
      // Implementar lógica de pagamento aqui
      console.log("Form submitted:", {
        formData,
        selectedPlan,
        paymentMethod,
        cardDetails: paymentMethod.includes("card") ? cardDetails : null,
        couponCode,
        finalPrice: getFinalPrice(),
      });
    }
  };

  // Form validation schemas
  const step1Schema = z
    .object({
      firstName: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
      lastName: z.string().min(2, "Sobrenome deve ter pelo menos 2 caracteres"),
      email: z.string().email("Email inválido"),
      password: z
        .string()
        .min(8, "Senha deve ter pelo menos 8 caracteres")
        .regex(/[A-Z]/, "Deve conter pelo menos uma letra maiúscula")
        .regex(/[0-9]/, "Deve conter pelo menos um número"),
      confirmPassword: z.string(),
      acceptTerms: z
        .boolean()
        .refine((val) => val === true, "Você deve aceitar os termos"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Senhas não conferem",
      path: ["confirmPassword"],
    });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateStep1 = () => {
    try {
      step1Schema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      const formattedErrors = {};
      error.errors.forEach((err) => {
        formattedErrors[err.path[0]] = err.message;
      });
      setErrors(formattedErrors);
      return false;
    }
  };

  const handleStep1 = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleStep2 = () => {
    if (selectedPlan !== null) {
      setStep(3);
    } else {
      setErrors({ plan: "Por favor, selecione um plano" });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-8">
      <div className="glass p-8 rounded-2xl w-full max-w-2xl z-10 overflow-hidden">
        <div className="text-center mb-8">
          <Link
            to="/"
            className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"
          >
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Syncros</h1>
          <p className="text-gray-400">
            Crie sua conta e comece a gerenciar seus projetos
          </p>
        </div>

        <div className="flex items-center justify-center mb-8">
          <div className={`step-indicator ${step === 1 ? "active" : ""}`}>
            1
          </div>
          <div className="step-line"></div>
          <div className={`step-indicator ${step === 2 ? "active" : ""}`}>
            2
          </div>
          <div className="step-line"></div>
          <div className={`step-indicator ${step === 3 ? "active" : ""}`}>
            3
          </div>
        </div>

        <div className={`relative ${sliding}`}>
          {step === 1 && (
           <FormSignup formData={FormData} errors={errors} handleInputChange={handleInputChange} handleStep1={handleStep1}/>
          )}
          {step === 2 && (
           <SetPlan plans={plans} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} handleStepChange={handleStepChange} errors={errors} handleStep2={handleStep2}/>
          )}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white text-center mb-6">
                Finalizar assinatura
              </h2>

              <div className="bg-blue-900/20 p-4 rounded-lg mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {plans.find((p) => p.id === selectedPlan)?.name}
                    </h3>
                    <p className="text-gray-400">Cobrança mensal</p>
                  </div>
                  <p className="text-2xl font-bold text-white">
                    R${getFinalPrice()}
                  </p>
                </div>
              </div>

              {/* Coupon Section */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Código do cupom"
                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none"
                  />
                  <button
                    onClick={applyCoupon}
                    disabled={isProcessing}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {isProcessing ? "Validando..." : "Aplicar"}
                  </button>
                </div>
                {errors.coupon && (
                  <p className="text-red-500 flex items-center">
                    <AlertCircle size={16} className="mr-2" />
                    {errors.coupon}
                  </p>
                )}
                {couponDiscount > 0 && (
                  <p className="text-green-500 flex items-center">
                    <Check size={16} className="mr-2" />
                    Cupom aplicado! {couponDiscount}% de desconto
                  </p>
                )}
              </div>

              {getFinalPrice() > 0 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-white">
                    Forma de pagamento
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        onClick={() => handlePaymentMethodSelect(method.id)}
                        className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                          paymentMethod === method.id
                            ? "bg-blue-600/20 border-2 border-blue-500"
                            : "bg-gray-800/50 border border-gray-700"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <method.icon className="w-6 h-6 text-blue-500" />
                          <div>
                            <p className="font-medium text-white">
                              {method.name}
                            </p>
                            <p className="text-sm text-gray-400">
                              {method.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {errors.paymentMethod && (
                    <p className="text-red-500 text-sm">
                      {errors.paymentMethod}
                    </p>
                  )}

                  {/* Card Form */}
                  {(paymentMethod === "credit" ||
                    paymentMethod === "debit") && (
                    <div className="space-y-6">
                      <div className="card-container relative h-56">
                        <div
                          className={`card absolute w-full h-full ${
                            cardFlipped ? "flipped" : ""
                          }`}
                        >
                          {/* Card Front */}
                          <div className="card-front p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl">
                            <div className="space-y-4">
                              <div className="flex justify-between">
                                <div className="w-12 h-8 bg-gradient-to-br from-yellow-400 to-yellow-200 rounded-md"></div>
                                <div className="w-12 h-8 bg-gradient-to-br from-yellow-400 to-yellow-200 rounded-md"></div>
                                <CreditCard className="w-8 h-8 text-gray-400" />
                              </div>

                              <div className="text-xl font-mono text-white tracking-wider">
                                {cardDetails.number || "•••• •••• •••• ••••"}
                              </div>

                              <div className="flex justify-between">
                                <div>
                                  <p className="text-xs text-gray-400">
                                    Nome do Titular
                                  </p>
                                  <p className="font-mono text-white">
                                    {cardDetails.name || "NOME DO TITULAR"}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-xs text-gray-400">
                                    Validade
                                  </p>
                                  <p className="font-mono text-white">
                                    {cardDetails.expiry || "MM/AA"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Card Back */}
                          <div className="card-back p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl">
                            <div className="w-full h-10 bg-gray-700 my-4"></div>
                            <div className="flex justify-end">
                              <div>
                                <p className="text-xs text-gray-400 mb-1">
                                  CVC
                                </p>
                                <div className="bg-white px-2 py-1 rounded">
                                  <p className="font-mono text-gray-800">
                                    {cardDetails.cvc || "•••"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Form Fields */}
                        <div className="mt-64 space-y-4">
                          <div className="grid grid-cols-1 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-400 mb-1">
                                Número do Cartão
                              </label>
                              <input
                                type="text"
                                value={cardDetails.number}
                                onChange={handleCardNumberChange}
                                maxLength="19"
                                placeholder="1234 5678 9012 3456"
                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-400 mb-1">
                                Nome do Titular
                              </label>
                              <input
                                type="text"
                                value={cardDetails.name}
                                onChange={(e) =>
                                  setCardDetails({
                                    ...cardDetails,
                                    name: e.target.value.toUpperCase(),
                                  })
                                }
                                placeholder="NOME COMO ESTÁ NO CARTÃO"
                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                              />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">
                                  Data de Validade
                                </label>
                                <input
                                  type="text"
                                  value={cardDetails.expiry}
                                  onChange={handleExpiryChange}
                                  maxLength="5"
                                  placeholder="MM/AA"
                                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                                />
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">
                                  CVC
                                </label>
                                <input
                                  type="text"
                                  value={cardDetails.cvc}
                                  onChange={(e) =>
                                    setCardDetails({
                                      ...cardDetails,
                                      cvc: e.target.value.slice(0, 3),
                                    })
                                  }
                                  maxLength="3"
                                  placeholder="123"
                                  onFocus={handleCVCFocus}
                                  onBlur={handleCVCBlur}
                                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                                />
                              </div>
                            </div>
                          </div>

                          {errors.card && (
                            <p className="text-red-500 flex items-center">
                              <AlertCircle size={16} className="mr-2" />
                              {errors.card}
                            </p>
                          )}
                        </div>

                        {/* Submit Button */}
                        <button
                          onClick={handleSubmit}
                          disabled={isProcessing}
                          className="mt-8 w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-50"
                        >
                          {isProcessing ? (
                            <div className="flex items-center justify-center">
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                              Processando...
                            </div>
                          ) : (
                            `Finalizar Pagamento - R$${getFinalPrice()}`
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <div className="mt-8 flex justify-between items-center">
                <button
                  onClick={() => handleStepChange(2)}
                  className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300"
                >
                  Voltar
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isProcessing}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-50 flex items-center"
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processando...
                    </>
                  ) : (
                    <>
                      Finalizar Cadastro
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUpSection;

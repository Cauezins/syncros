import {
    Check
  } from "lucide-react";
import PropTypes from "prop-types";
function SetPlan({plans, selectedPlan, setSelectedPlan, handleStepChange, handleStep2, errors}){
    SetPlan.propTypes = {
        plans: PropTypes.array.isRequired,
        selectedPlan: PropTypes.number.isRequired,
        setSelectedPlan: PropTypes.func.isRequired,
        handleStepChange: PropTypes.func.isRequired,
        handleStep2: PropTypes.func.isRequired,
        errors: PropTypes.object.isRequired,
      };
    return(
        <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Escolha seu plano
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`relative p-6 rounded-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] ${
                selectedPlan === plan.id
                  ? "bg-blue-600/20 border-2 border-blue-500"
                  : "bg-gray-800/50 border border-gray-700"
              }`}
            >
              {selectedPlan === plan.id && (
                <div className="absolute -top-2 -right-2 bg-blue-500 rounded-full p-1">
                  <Check size={16} />
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-3xl font-bold text-white mb-4">
                {plan.price === 0
                  ? "Grátis"
                  : `R$${plan.price.toFixed(2)}`}
                <span className="text-sm font-normal text-gray-400">
                  /mês
                </span>
              </p>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-gray-300 flex items-center"
                  >
                    <Check size={16} className="text-blue-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {errors.plan && (
          <p className="text-red-500 text-center">{errors.plan}</p>
        )}

        <div className="flex gap-4 mt-8">
          <button
            onClick={() => handleStepChange(1)}
            className="flex-1 py-3 px-4 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-all duration-300"
          >
            Voltar
          </button>
          <button
            onClick={() => handleStep2()}
            className="flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg transition-all duration-300"
          >
            Continuar
          </button>
        </div>
      </div>
    )
}

export default SetPlan;
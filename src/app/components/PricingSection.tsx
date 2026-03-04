import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

export function PricingSection() {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Best for Starter users",
      price: "Free",
      period: "",
      buttonText: "Get Started Free",
      features: [
        "Includes 2 users",
        "Up to 2 Tally companies",
        "Auto sync in 180",
        "Interactive financial dashboard",
        "Monthly financial summary",
        "Last sync time visible",
        "Agent based integration",
        "Custom field extraction",
        "Voucher level access",
        "Manage your Settings",
        "Voucher explorer",
        "Voucher additional view",
      ],
      color: "from-gray-600 to-gray-700",
      popular: false,
    },
    {
      name: "Professional",
      description: "Best for Professional users",
      price: "₹199",
      period: "/user/month",
      buttonText: "Buy Now",
      features: [
        "Includes 5 users",
        "Up to 5 Tally companies",
        "Auto sync in 60",
        "Interactive financial dashboard",
        "Monthly financial summary",
        "Agent based integration",
        "Last sync time visible",
        "Auto select mode & user",
        "Custom field extraction",
        "Tally ledger list access",
        "Ledger level access",
        "Voucher level access",
        "Order level access",
        "Inventory level access",
      ],
      color: "from-cyan-500 to-blue-600",
      popular: true,
    },
    {
      name: "Business",
      description: "Best for Business users",
      price: "₹399",
      period: "/user/month",
      buttonText: "Buy Now",
      features: [
        "Includes 10 users",
        "Up to 10 Tally companies",
        "Auto sync in 30",
        "Interactive financial dashboard",
        "Monthly financial summary",
        "Last sync time visible",
        "Custom field extraction",
        "Auto select phone & email",
        "Tally ledger list access",
        "Voucher explorer",
        "Voucher additional view",
        "Basic reports",
        "Advanced financial reports",
        "CSV export",
        "PDF export",
        "User details visible",
        "User creation & deletion",
        "Full admin control",
        "Multi company view",
        "Company wise user assignment",
        "Role based access",
        "Row level access",
        "Manage your Settings",
        "Ledger level access",
        "Voucher level access",
      ],
      color: "from-blue-600 to-indigo-600",
      popular: false,
    },
    {
      name: "Enterprise",
      description: "Best for Enterprise users",
      price: "₹599",
      period: "/user/month",
      buttonText: "Contact Sales",
      features: [
        "Includes 15 users",
        "Up to 25 Tally companies",
        "Auto sync in 1",
        "Interactive financial dashboard",
        "Monthly financial summary",
        "Last sync time visible",
        "Custom field extraction",
        "Auto select phone & email",
        "Tally ledger list access",
        "Voucher explorer",
        "Voucher additional view",
        "Basic reports",
        "Advanced financial reports",
        "CSV export",
        "PDF export",
        "User details visible",
        "User creation & deletion",
        "Multi company view",
        "Row level access",
        "Manage your Settings",
        "Ledger level access",
        "Voucher level access",
        "Order level access",
        "Inventory level access",
        "Email credentials",
        "Permission revoke/assign",
        "Login tracking",
        "Permission monitoring",
        "Access verification",
        "Audit logs",
      ],
      color: "from-purple-600 to-pink-600",
      popular: false,
    },
  ];

  const tabs = ["Monthly", "Quarterly", "Half Yearly", "Yearly"];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-8 text-gray-900 italic">Pricing</h2>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-2 rounded-lg font-medium text-sm transition-all ${
                  tab === "Monthly"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab}
                {tab !== "Monthly" && (
                  <span className="ml-2 text-xs text-green-600 font-semibold">
                    -{index * 5}%
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative rounded-3xl p-6 bg-white shadow-xl hover:shadow-2xl transition-all ${
                plan.popular ? "ring-4 ring-cyan-500" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-white" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-to-r ${plan.color} text-white text-sm font-semibold mb-3`}
                >
                  {plan.name}
                </div>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-gray-600 text-sm">{plan.period}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-xl font-semibold mb-6 transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-xl"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.buttonText}
              </motion.button>

              <div className="space-y-3">
                <p className="font-semibold text-gray-900 text-sm mb-3">
                  Includes:
                </p>
                <div className="max-h-64 overflow-y-auto pr-2 space-y-2.5">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 bg-gradient-to-r ${plan.color} text-white rounded-full p-0.5`}
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
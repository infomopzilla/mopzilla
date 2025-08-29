
const franchiseData = [
  {
    title: "BECOME A FRANCHISEE",
    description: "Join our growing network of successful franchise owners",
    bgColor: "bg-teal-600",
    textColor: "text-white",
  },
  {
    title: "TRAINING PROGRAM",
    description: "Comprehensive training and ongoing support for all franchisees",
    bgColor: "bg-yellow-400",
    textColor: "text-slate-700",
  },
  {
    title: "MARKETING SUPPORT",
    description: "Full marketing support and brand recognition to help you succeed",
    bgColor: "bg-teal-700",
    textColor: "text-white",
  },
  {
    title: "PROVEN BUSINESS MODEL",
    description: "Time-tested business model with proven success across multiple markets",
    bgColor: "bg-yellow-500",
    textColor: "text-slate-700",
  },
]

export default function FranchiseCards() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {franchiseData.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} ${card.textColor} p-6 rounded-lg h-48 flex flex-col justify-center`}
            >
              <h3 className="font-bold text-lg mb-3">{card.title}</h3>
              <p className="text-sm opacity-90">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

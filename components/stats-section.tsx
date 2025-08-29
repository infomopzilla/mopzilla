const stats = [
  { value: "100%", label: "SATISFACTION GUARANTEE" },
  { value: "2450", label: "CLIENTS" },
  { value: "26", label: "YEARS EXPERIENCE" },
  { value: "29", label: "STATES SERVED" },
  { value: "1745", label: "EMPLOYEES" },
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-[#2a738d]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm lg:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

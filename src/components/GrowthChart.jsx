import Animate from "./Animate";

const growthChart = [
  { name: "Certified Students", value: "10K+" },
  { name: "Corporate Trainers", value: "20+" },
  { name: "Companies", value: "199+" },
  { name: "Students Placement", value: "1K+" },
  { name: "Placement Support", value: "100%" },
];

function GrowthChart() {
  return (
    <div>
      <h2 className="mb-10 text-center text-2xl font-bold">Our Growth Chart</h2>
      <div className="grid gap-8 grid-cols-1 xm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {growthChart.map((item) => (
          <Animate key={item.name}>
            <div className="text-center">
              <div className="text-4xl xm:text-3xl sm:text-5xl font-semibold mb-1">
                {item.value}
              </div>
              <p>{item.name}</p>
            </div>
          </Animate>
        ))}
      </div>
    </div>
  );
}

export default GrowthChart;

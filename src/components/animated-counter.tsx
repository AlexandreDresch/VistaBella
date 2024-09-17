import CountUp from "react-countup";

export default function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <div className="w-max font-bold">
      <CountUp end={amount} decimal="," prefix="R$" decimals={2} />
    </div>
  );
}

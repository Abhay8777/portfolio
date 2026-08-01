export default function Glow() {
  return (
    <>
      <div className="fixed -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[140px] -z-10" />

      <div className="fixed bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-violet-500/20 blur-[140px] -z-10" />

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[120px] -z-10" />
    </>
  );
}
import TopContent from "./TopContent";

const Top = () => {
  return (
    <div
      className="h-screen w-full bg-center bg-cover bg-fixed bg-no-repeat relative rounded-2xl"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1520252684003-ed43c268810a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}
    >
      <TopContent/>
    </div>
  );
};

export default Top;


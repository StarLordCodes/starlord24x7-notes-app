'use client'
import passportInstance from "./passport";

async function handleLogin(){
  const provider = passportInstance.connectEvm();
  const accounts = await provider.request({ method: "eth_requestAccounts" });
}

export default function Home() {
  return (
    <div class="home-page">
      <h1> Welcome to Notes App</h1>
      <h2> Login to continue</h2>
      <button onClick={handleLogin}> Login </button>
    </div>
  );
}

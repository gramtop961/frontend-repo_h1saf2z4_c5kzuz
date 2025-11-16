import React from 'react';
import { useNavigate } from 'react-router-dom';

function getData(){
  try { return JSON.parse(localStorage.getItem('ecliptz_registration')||'null'); } catch { return null; }
}

export default function Payment(){
  const data = getData();
  const navigate = useNavigate();
  const [processing, setProcessing] = React.useState(false);
  const [success, setSuccess] = React.useState(sessionStorage.getItem('ecliptz_payment_status') === 'success');

  React.useEffect(()=>{
    if(!data) navigate('/registration');
  },[data, navigate]);

  const simulate = () => {
    setProcessing(true);
    setTimeout(()=>{
      setProcessing(false);
      setSuccess(true);
      sessionStorage.setItem('ecliptz_payment_status', 'success');
      const saved = getData();
      localStorage.setItem('ecliptz_registration', JSON.stringify({ ...(saved||{}), paid: true, paidAt: new Date().toISOString() }));
    }, 1400);
  };

  return (
    <main className="pt-24 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-semibold text-white">Payment</h1>
      <p className="text-white/70 mt-2">Event fee: ₹500 per team. Choose a method below and click the dummy button to simulate payment.</p>

      <div className="mt-8 grid grid-cols-1 gap-6">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <h2 className="text-white font-semibold">Summary</h2>
          <div className="mt-3 text-white/70 text-sm">
            <p><span className="text-white/60">Team:</span> {data?.teamName}</p>
            <p><span className="text-white/60">Category:</span> {data?.category}</p>
            <p><span className="text-white/60">Email:</span> {data?.email}</p>
          </div>
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
          <h2 className="text-white font-semibold">Payment Methods</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {['UPI', 'QR', 'Mock Card'].map((m) => (
              <div key={m} className="rounded-xl border border-white/10 bg-[#0b0c12]/60 p-4 text-center text-white/80">{m}</div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="w-28 h-28 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60">QR</div>
            <div className="text-white/70 text-sm">Scan to pay or click the button to simulate payment.</div>
          </div>

          {!success ? (
            <button onClick={simulate} disabled={processing} className="mt-6 rounded-md px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold disabled:opacity-60">
              {processing ? 'Processing…' : 'Pay Now (Dummy)'}
            </button>
          ) : (
            <button onClick={()=>navigate('/confirmation')} className="mt-6 rounded-md px-6 py-3 bg-green-400 text-black font-semibold">
              Payment Success → Continue
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

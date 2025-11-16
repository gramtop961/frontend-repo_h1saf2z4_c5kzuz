import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Confirmation(){
  const navigate = useNavigate();
  const data = React.useMemo(()=>{
    try { return JSON.parse(localStorage.getItem('ecliptz_registration')||'null'); } catch { return null; }
  },[]);

  React.useEffect(()=>{
    if(sessionStorage.getItem('ecliptz_payment_status') !== 'success') navigate('/payment');
  },[navigate]);

  return (
    <main className="pt-24 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-semibold text-white">Registration Successful</h1>
      <p className="text-white/70 mt-2">Your registration is confirmed. Keep this summary for your records.</p>

      <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-6">
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/80 text-sm">
          <div><dt className="text-white/60">Team Name</dt><dd>{data?.teamName}</dd></div>
          <div><dt className="text-white/60">Mode</dt><dd>{data?.mode}</dd></div>
          <div><dt className="text-white/60">Category</dt><dd>{data?.category}</dd></div>
          <div><dt className="text-white/60">Email</dt><dd>{data?.email}</dd></div>
          <div className="sm:col-span-2"><dt className="text-white/60">Participants</dt><dd>{(data?.participants||[]).filter(Boolean).join(', ')}</dd></div>
          <div className="sm:col-span-2"><dt className="text-white/60">Project Title</dt><dd>{data?.title}</dd></div>
          <div className="sm:col-span-2"><dt className="text-white/60">Abstract</dt><dd>{data?.abstract}</dd></div>
          <div><dt className="text-white/60">Paid</dt><dd>{data?.paid? 'Yes' : 'No'}</dd></div>
          <div><dt className="text-white/60">Paid At</dt><dd>{data?.paidAt? new Date(data.paidAt).toLocaleString() : '-'}</dd></div>
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#" target="_blank" rel="noreferrer" className="rounded-md px-6 py-3 bg-green-400 text-black font-semibold">Join WhatsApp Group</a>
          <Link to="/" className="rounded-md px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold">Back to Home</Link>
          <button onClick={()=>window.print()} className="rounded-md px-4 py-2 border border-white/20 text-white/80">Print</button>
        </div>
      </div>
    </main>
  );
}

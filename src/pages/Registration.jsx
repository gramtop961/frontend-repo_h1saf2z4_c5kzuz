import React from 'react';
import { useNavigate } from 'react-router-dom';

const initial = {
  mode: 'Team',
  teamName: '',
  participants: [''],
  email: '',
  phone: '',
  org: '',
  category: 'AI',
  title: '',
  abstract: '',
};

function loadSaved() {
  try { return JSON.parse(localStorage.getItem('ecliptz_registration') || 'null') || initial; } catch { return initial; }
}

export default function Registration() {
  const [data, setData] = React.useState(loadSaved());
  const [errors, setErrors] = React.useState({});
  const [count, setCount] = React.useState(data.abstract?.split(/\s+/).filter(Boolean).length || 0);
  const navigate = useNavigate();

  const update = (field, value) => setData((d) => ({ ...d, [field]: value }));

  const validate = () => {
    const e = {};
    if (!data.teamName.trim()) e.teamName = 'Required';
    if (!data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Invalid email';
    if (!data.phone.match(/^\+?\d{7,15}$/)) e.phone = 'Invalid phone';
    if (!data.title.trim()) e.title = 'Required';
    if (!data.abstract.trim()) e.abstract = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  React.useEffect(() => {
    localStorage.setItem('ecliptz_registration', JSON.stringify(data));
  }, [data]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    sessionStorage.setItem('ecliptz_payment_status', 'pending');
    navigate('/payment');
  };

  return (
    <main className="pt-24 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-semibold text-white">Registration</h1>
      <p className="text-white/70 mt-2">₹500 per team. Supported methods: UPI / QR / Mock card. Only registered teams may participate.</p>

      <form onSubmit={onSubmit} className="mt-8 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-white/80 text-sm">Team / Individual</label>
            <div className="mt-2 flex gap-4">
              {['Team', 'Individual'].map((m) => (
                <label key={m} className="inline-flex items-center gap-2 text-white/80">
                  <input type="radio" name="mode" checked={data.mode === m} onChange={() => update('mode', m)} /> {m}
                </label>
              ))}
            </div>
          </div>
          <Field label="Team Name" value={data.teamName} onChange={(v)=>update('teamName', v)} error={errors.teamName} />
          <Field label="Email" type="email" value={data.email} onChange={(v)=>update('email', v)} error={errors.email} />
          <Field label="Phone" value={data.phone} onChange={(v)=>update('phone', v)} error={errors.phone} placeholder="+91 9876543210" />
          <Field label="College / Organization" value={data.org} onChange={(v)=>update('org', v)} />
          <div>
            <label className="text-white/80 text-sm">Category</label>
            <select value={data.category} onChange={(e)=>update('category', e.target.value)} className="mt-2 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white">
              {['AI','Web','Mobile','Hardware','Open Innovation'].map(o=> <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <Field label="Project Idea Title" value={data.title} onChange={(v)=>update('title', v)} error={errors.title} />
          <div className="sm:col-span-2">
            <label className="text-white/80 text-sm">Participant Name(s)</label>
            {data.participants.map((p, i) => (
              <div key={i} className="mt-2 flex gap-2">
                <input value={p} onChange={(e)=>{
                  const arr=[...data.participants];arr[i]=e.target.value;update('participants', arr);
                }} className="flex-1 rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white" placeholder={`Participant ${i+1}`} />
                <button type="button" onClick={()=>update('participants', data.participants.filter((_,idx)=>idx!==i))} className="px-3 rounded-md bg-white/10 text-white">Remove</button>
              </div>
            ))}
            <button type="button" onClick={()=>update('participants', [...data.participants, ''])} className="mt-2 px-3 py-2 rounded-md bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold">Add Participant</button>
          </div>
          <div className="sm:col-span-2">
            <label className="text-white/80 text-sm">Abstract (max 200 words)</label>
            <textarea value={data.abstract} onChange={(e)=>{update('abstract', e.target.value); setCount(e.target.value.split(/\s+/).filter(Boolean).length);}} rows={5} className="mt-2 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white" />
            <div className="mt-1 text-xs text-white/60">{count} / 200 words</div>
            {errors.abstract && <p className="text-red-400 text-sm mt-1">{errors.abstract}</p>}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-24 h-24 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60">QR</div>
            <div className="text-white/70 text-sm">Scan and pay ₹500 via UPI or proceed with dummy payment on next step.</div>
          </div>
          <button type="submit" className="rounded-md px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold shadow-[0_0_20px_rgba(0,212,255,0.5)]">Continue to Payment</button>
        </div>
      </form>
    </main>
  );
}

function Field({ label, type='text', value, onChange, error, placeholder }){
  return (
    <div>
      <label className="text-white/80 text-sm">{label}</label>
      <input type={type} value={value} onChange={(e)=>onChange(e.target.value)} placeholder={placeholder} className={`mt-2 w-full rounded-md bg-white/5 border px-3 py-2 text-white ${error? 'border-red-500' : 'border-white/10 focus:border-cyan-400/60'}`} />
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
}

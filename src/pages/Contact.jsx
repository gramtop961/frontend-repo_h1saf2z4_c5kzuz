import React from 'react';

export default function Contact(){
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [sent, setSent] = React.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Contact message:', form);
    setSent(true);
  };

  return (
    <main className="pt-24 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-semibold text-white">Contact</h1>
      <div className="mt-2 text-white/80 text-sm">
        <p>Email: support@ecliptzlabs.com</p>
        <p>Phone: +91 98765 43210</p>
        <div className="mt-2 flex gap-3 text-white/70 text-sm">
          <a href="#" className="underline">Instagram</a>
          <a href="#" className="underline">LinkedIn</a>
          <a href="#" className="underline">YouTube</a>
        </div>
      </div>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <Field label="Name" value={form.name} onChange={(v)=>setForm({...form, name: v})} />
        <Field label="Email" type="email" value={form.email} onChange={(v)=>setForm({...form, email: v})} />
        <div>
          <label className="text-white/80 text-sm">Message</label>
          <textarea value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} rows={5} className="mt-2 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white" />
        </div>
        <button type="submit" className="rounded-md px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold">Send</button>
        {sent && <p className="text-green-400 text-sm">Message captured locally. We will reach out soon.</p>}
      </form>
    </main>
  );
}

function Field({ label, type='text', value, onChange }){
  return (
    <div>
      <label className="text-white/80 text-sm">{label}</label>
      <input type={type} value={value} onChange={(e)=>onChange(e.target.value)} className="mt-2 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white" />
    </div>
  );
}

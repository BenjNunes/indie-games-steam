import React from 'react';
import { Mail, Sparkles } from 'lucide-react';

export default function Header({ onConnect, isConnected }) {
  return (
    <header className="header" style={{ padding: '2rem 0', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ backgroundColor: 'var(--accent)', padding: '0.5rem', borderRadius: '12px' }}>
            <Mail color="var(--bg)" size={24} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Inbox<span className="text-gradient">AI</span></h1>
          </div>
        </div>

        <nav>
          {isConnected ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Conectado como usuario@gmail.com</span>
              <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={18} className="text-premium" />
                <span>Config IA</span>
              </button>
            </div>
          ) : (
            <button className="btn btn-primary" onClick={onConnect}>
              Conectar Gmail
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

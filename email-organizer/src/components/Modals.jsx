import React, { useState } from 'react';
import { Sparkles, Shield, Tag, Trash2, HardDrive, AlertTriangle } from 'lucide-react';

export function PermissionsModal({ onAccept }) {
  return (
    <div className="modal-overlay">
      <div className="glass-panel" style={{ maxWidth: '450px', width: '100%', position: 'relative', margin: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', backgroundColor: 'var(--bg-elevated)', padding: '1rem', borderRadius: '50%', marginBottom: '1rem' }}>
            <Shield size={32} color="var(--accent)" />
          </div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Conecte seu Gmail</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Dê permissão ao InboxAI para ler e classificar seus e-mails usando marcadores (labels). Nós NUNCA deletamos ou movemos e-mails sem sua permissão explícita.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '1rem', backgroundColor: 'var(--bg-elevated)', borderRadius: '12px' }}>
            <Tag size={20} color="var(--accent-glow)" />
            <div style={{ fontSize: '0.9rem' }}>Apenas Ler e Etiquetar (Read-Only)</div>
          </div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '1rem', backgroundColor: 'var(--bg-elevated)', borderRadius: '12px' }}>
            <Trash2 size={20} color="var(--danger)" />
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Movimentações & Exclusões desabilitadas por padrão</div>
          </div>
        </div>

        <button className="btn btn-primary" style={{ width: '100%' }} onClick={onAccept}>
          Permitir Acesso Seguro
        </button>
      </div>
    </div>
  );
}

export function EvaluationModal({ onComplete }) {
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return p + 10;
      });
    }, 300);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="modal-overlay">
      <div className="glass-panel" style={{ maxWidth: '400px', width: '100%', textAlign: 'center' }}>
        <div className="pulsing-icon" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>
          <Sparkles size={48} color="var(--accent-glow)" />
        </div>
        <h2 style={{ marginBottom: '1rem' }}>IA Analisando E-mails...</h2>
        <div style={{ 
          width: '100%', 
          height: '8px', 
          backgroundColor: 'var(--bg-elevated)', 
          borderRadius: '9999px',
          overflow: 'hidden',
          marginBottom: '1rem'
        }}>
          <div style={{ 
            height: '100%', 
            width: `${progress}%`, 
            background: 'linear-gradient(90deg, var(--accent), var(--accent-glow))',
            transition: 'width 0.3s ease'
          }}></div>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Lendo padrões e organizando etiquetas invisíveis...</p>
      </div>
    </div>
  );
}

export function PremiumDeleteModal({ onUpgrade, onClose }) {
  const [customEmail, setCustomEmail] = useState('');

  return (
    <div className="modal-overlay">
      <div className="glass-panel" style={{ maxWidth: '500px', width: '100%', position: 'absolute', top: '10%' }}>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'inline-flex', background: 'linear-gradient(135deg, rgba(156, 136, 255, 0.2), rgba(255, 159, 243, 0.2))', padding: '1rem', borderRadius: '50%', marginBottom: '1rem' }}>
            <HardDrive size={32} color="var(--premium)" />
          </div>
          <h2 className="text-premium" style={{ marginBottom: '0.5rem' }}>Desbloqueie a Limpeza Profunda</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Economize espaço na conta Google deletando permanentemente mais de 4,500 e-mails de lixo detectados pela IA.</p>
        </div>

        <div style={{ backgroundColor: 'var(--bg-elevated)', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem', border: '1px solid rgba(156, 136, 255, 0.3)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: 600 }}>
            <span>Espaço Estimado Salvo</span>
            <span className="text-premium">~4.2 GB</span>
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Deletar um Remetente Específico (Opcional, ex: promo@loja.com)</label>
            <input 
              type="text" 
              value={customEmail}
              onChange={(e) => setCustomEmail(e.target.value)}
              placeholder="Digite o e-mail que deseja expurgar..." 
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                backgroundColor: 'var(--bg)',
                border: '1px solid var(--border)',
                color: 'white',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', color: 'var(--warning)', fontSize: '0.85rem' }}>
            <AlertTriangle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>Este nível é avançado. E-mails selecionados serão permanentemente removidos e não apenas etiquetados.</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-outline" style={{ flex: 1 }} onClick={onClose}>Etiquetar Apenas (Grátis)</button>
          <button className="btn btn-premium" style={{ flex: 1 }} onClick={onUpgrade}>Limpar por R$ 25 ($5)</button>
        </div>
      </div>
    </div>
  );
}

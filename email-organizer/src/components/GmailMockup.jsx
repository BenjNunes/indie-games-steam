import React from 'react';
import { Tag, Sparkles, CheckCircle2, ShieldAlert, BadgeCent } from 'lucide-react';

export default function GmailMockup() {
  const mockEmails = [
    { id: 1, sender: 'Netflix', subject: 'Seu novo recibo mensal', date: '10:30 AM', aiLabel: 'Fatura', color: '#1DD1A1' },
    { id: 2, sender: 'Marketing Semanal', subject: '10 dicas para crescer sua audiência', date: 'Ontem', aiLabel: 'Newsletter', color: '#9C88FF' },
    { id: 3, sender: 'Promoção Aleatória', subject: 'URGENTE: Resgate seu prêmio agora!', date: '12 Out', aiLabel: 'Spam / Lixo', color: '#FF6B6B' },
    { id: 4, sender: 'Alice (Gerente)', subject: 'Atualizações do Projeto Alpha', date: '10 Out', aiLabel: 'Prioridade Alta', color: '#45A29E' },
    { id: 5, sender: 'Amazon', subject: 'Seu pedido foi enviado', date: '08 Out', aiLabel: 'Compras', color: '#FECA57' },
  ];

  return (
    <div className="glass-panel" style={{ marginTop: '3rem', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2>Prévia: <span className="text-gradient">Classificação da IA</span></h2>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', backgroundColor: 'rgba(29, 209, 161, 0.1)', padding: '0.5rem 1rem', borderRadius: '9999px' }}>
          <CheckCircle2 color="var(--success)" size={16} />
          <span style={{ fontSize: '0.85rem', color: 'var(--success)', fontWeight: 500 }}>Apenas Leitura & Tags (Sem Deletar)</span>
        </div>
      </div>

      <div style={{ 
        border: '1px solid var(--border)', 
        borderRadius: '12px', 
        overflow: 'hidden',
        backgroundColor: 'var(--bg-elevated)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
      }}>
        {/* Mock Header */}
        <div style={{ padding: '1rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', gap: '1rem' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FF6B6B' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FECA57' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#1DD1A1' }}></div>
        </div>
        
        {/* Mock Content */}
        <div style={{ display: 'flex' }}>
          {/* Sidebar */}
          <div style={{ width: '220px', padding: '1.5rem 1rem', borderRight: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.05em' }}>MARCADORES DA IA</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem' }}><BadgeCent size={16} color="#1DD1A1"/> Faturas & Recibos</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem' }}><Tag size={16} color="#9C88FF"/> Newsletters</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem' }}><Tag size={16} color="#FECA57"/> Compras</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem' }}><ShieldAlert size={16} color="#FF6B6B"/> Suspeito / Spam</div>
            
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)' }}>1,432</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>E-mails analisados</div>
            </div>
          </div>

          {/* Email List */}
          <div style={{ flex: 1 }}>
            {mockEmails.map((email, index) => (
              <div key={email.id} style={{ 
                display: 'flex', 
                alignItems: 'center',
                padding: '1.25rem 1rem', 
                borderBottom: index === mockEmails.length - 1 ? 'none' : '1px solid var(--glass-border)',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }} className="email-row">
                <div style={{ width: '180px', fontWeight: 600, fontSize: '0.95rem' }}>{email.sender}</div>
                <div style={{ flex: 1, color: 'var(--text-secondary)', fontSize: '0.95rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', paddingRight: '1rem' }}>{email.subject}</div>
                
                {/* AI Badge / Label */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.4rem',
                  backgroundColor: `${email.color}15`,
                  color: email.color,
                  border: `1px solid ${email.color}40`,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  marginRight: '1rem',
                  whiteSpace: 'nowrap'
                }}>
                  <Sparkles size={10} />
                  {email.aiLabel}
                </div>

                <div style={{ width: '70px', textAlign: 'right', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{email.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

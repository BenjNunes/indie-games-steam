import React, { useState } from 'react';
import Header from './components/Header';
import GmailMockup from './components/GmailMockup';
import { PermissionsModal, EvaluationModal, PremiumDeleteModal } from './components/Modals';
import { ArrowRight, Sparkles, CheckCircle, Shield } from 'lucide-react';

function App() {
  const [step, setStep] = useState('landing'); // landing, permissions, evaluating, rules-preview, premium-upsell, done
  const [isConnected, setIsConnected] = useState(false);
  const [isPremiumUnlocked, setIsPremiumUnlocked] = useState(false);

  const handleConnectClick = () => setStep('permissions');
  
  const handleAllowAccess = () => {
    setIsConnected(true);
    setStep('evaluating');
  };

  const handleEvaluationComplete = () => {
    setStep('rules-preview');
  };

  const handleApplyRules = () => {
    setStep('premium-upsell');
  };

  const handleUpgrade = () => {
    setIsPremiumUnlocked(true);
    setStep('done');
  };

  const handleSkipUpgrade = () => {
    setStep('done');
  };

  return (
    <>
      <Header onConnect={handleConnectClick} isConnected={isConnected} />
      
      <main className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        
        {step === 'landing' && (
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div className="animate-fade-in">
              <div style={{ display: 'inline-flex', padding: '0.5rem 1rem', borderRadius: '9999px', backgroundColor: 'var(--bg-elevated)', border: '1px solid var(--border)', marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--accent-glow)' }}>
                <Sparkles size={16} style={{ marginRight: '0.5rem', display: 'inline-block', verticalAlign: 'text-bottom' }} />
                Gerenciamento Inteligente de Inbox
              </div>
              <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                Classifique seus e-mails num <span className="text-gradient">Passe de Mágica.</span>
              </h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                Dê permissão apenas para leitura. Nossa IA analisa e aplica etiquetas automáticas nos seus e-mails. Organize sua caixa de entrada sem dor de cabeça.
              </p>
              
              <button className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.2rem', boxShadow: '0 0 30px rgba(69, 162, 158, 0.4)' }} onClick={handleConnectClick}>
                Conectar Conta <ArrowRight size={20} />
              </button>
            </div>
            
            {/* Minimal graphical tease */}
            <div className="glass-panel animate-fade-in" style={{ marginTop: '5rem', animationDelay: '0.3s', padding: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', opacity: 0.6 }}>
                <div style={{ height: '12px', width: '20%', backgroundColor: 'var(--accent)', borderRadius: '4px' }}></div>
                <div style={{ height: '12px', width: '60%', backgroundColor: 'var(--text-secondary)', borderRadius: '4px' }}></div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', opacity: 0.4, marginTop: '1rem' }}>
                <div style={{ height: '12px', width: '15%', backgroundColor: 'var(--danger)', borderRadius: '4px' }}></div>
                <div style={{ height: '12px', width: '70%', backgroundColor: 'var(--text-secondary)', borderRadius: '4px' }}></div>
              </div>
            </div>
          </div>
        )}

        {/* Permissions Overlay Flow */}
        {step === 'permissions' && (
          <PermissionsModal onAccept={handleAllowAccess} />
        )}

        {/* Evaluating Overlay Flow */}
        {step === 'evaluating' && (
          <EvaluationModal onComplete={handleEvaluationComplete} />
        )}

        {/* Rules Preview - Main UI Transition */}
        {step === 'rules-preview' && (
          <div className="animate-fade-in">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Análise Concluída</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Revise os marcadores (labels) sugeridos antes de aplicá-los.</p>
            </div>
            
            <GmailMockup />

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
              <button className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }} onClick={handleApplyRules}>
                Aplicar Etiquetas Seguras
              </button>
            </div>
          </div>
        )}

        {/* Premium Upsell Overlay */}
        {step === 'premium-upsell' && (
          <>
            <GmailMockup />
            <PremiumDeleteModal onUpgrade={handleUpgrade} onClose={handleSkipUpgrade} />
          </>
        )}

        {/* Done State */}
        {step === 'done' && (
          <div className="glass-panel animate-fade-in" style={{ textAlign: 'center', maxWidth: '600px', margin: '4rem auto', padding: '4rem 2rem' }}>
            <CheckCircle size={64} color="var(--success)" style={{ marginBottom: '2rem' }} />
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Tudo Organizado!</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              As regras seguras de etiquetamento estão rodando em segundo plano. Suas categorias do Gmail serão atualizadas em breve.
            </p>
            {isPremiumUnlocked && (
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', backgroundColor: 'rgba(156, 136, 255, 0.1)', border: '1px solid var(--premium)', borderRadius: '9999px', color: 'var(--premium)' }}>
                <Shield size={20} />
                <span>Limpeza Premium Ativa. ~4.2 GB serão liberados.</span>
              </div>
            )}
          </div>
        )}

      </main>
    </>
  );
}

export default App;

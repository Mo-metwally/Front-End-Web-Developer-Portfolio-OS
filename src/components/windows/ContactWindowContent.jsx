import React, { useState, useRef } from 'react';
import { Send, CheckCircle2, Copy, Mail, MapPin, Phone, Globe, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

export default function ContactWindowContent() {
  const { lang, t } = useLanguage();
  const form = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage('');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      user_name: formData.name,
      user_email: formData.email,
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email
    };

    emailjs
      .send('service_8ks1mmq', 'template_6uun103', templateParams, '6vVqujtUV_1bYU7YT')
      .then(
        () => {
          setIsSending(false);
          setIsSent(true);
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setIsSent(false), 6000);
        },
        (error) => {
          setIsSending(false);
          setErrorMessage(lang === 'ar' ? 'تعذر إرسال الرسالة مباشرة، يرجى نسخ البريد الإلكتروني أدناه.' : 'Could not send message directly. Please copy email below.');
          console.error('EmailJS Error:', error);
        }
      );
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div style={{ padding: 'clamp(14px, 3.5vw, 32px)', display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: '#fdfbf7', minHeight: '100%' }}>
      {/* Header */}
      <div style={{ paddingBottom: '12px', borderBottom: '1px solid #ede4d6' }}>
        <span className="font-mono-code" style={{ fontSize: '9.5px', fontWeight: '700', letterSpacing: '0.15em', color: '#a86f3e', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
          {t.contact.tag}
        </span>
        <h2 className="font-serif-display" style={{ fontSize: 'clamp(20px, 4.5vw, 28px)', fontWeight: '400', color: '#1a1918', lineHeight: '1.1' }}>
          {t.contact.heading}
        </h2>
        <p style={{ fontSize: '11.5px', color: '#635b51', marginTop: '4px' }}>
          {t.contact.subtitle}
        </p>
      </div>

      <div className="responsive-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'start' }}>
        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '10px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#403d38', marginBottom: '4px' }}>
                {t.contact.yourName}
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t.contact.namePlaceholder}
                style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', backgroundColor: '#f5efe4', border: '1px solid #ddd2c1', fontSize: '12px', color: '#1c1b18', outline: 'none' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#403d38', marginBottom: '4px' }}>
                {t.contact.yourEmail}
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t.contact.emailPlaceholder}
                style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', backgroundColor: '#f5efe4', border: '1px solid #ddd2c1', fontSize: '12px', color: '#1c1b18', outline: 'none' }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#403d38', marginBottom: '4px' }}>
              {t.contact.subject}
            </label>
            <input
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder={t.contact.subjectPlaceholder}
              style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', backgroundColor: '#f5efe4', border: '1px solid #ddd2c1', fontSize: '12px', color: '#1c1b18', outline: 'none' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: '700', color: '#403d38', marginBottom: '4px' }}>
              {t.contact.message}
            </label>
            <textarea
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={t.contact.messagePlaceholder}
              style={{ width: '100%', padding: '8px 12px', borderRadius: '8px', backgroundColor: '#f5efe4', border: '1px solid #ddd2c1', fontSize: '12px', color: '#1c1b18', outline: 'none', resize: 'none', lineHeight: '1.5' }}
            />
          </div>

          {errorMessage && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: '#dc2626', backgroundColor: '#fee2e2', padding: '8px 12px', borderRadius: '8px' }}>
              <AlertCircle style={{ width: '14px', height: '14px' }} />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSending}
            style={{
              padding: '10px',
              borderRadius: '999px',
              backgroundColor: isSending ? '#6b5c50' : '#241b14',
              color: '#fdfbf7',
              fontSize: '12px',
              fontWeight: '600',
              border: 'none',
              cursor: isSending ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
              transition: 'background-color 0.15s ease'
            }}
            onMouseEnter={(e) => { if (!isSending) e.currentTarget.style.backgroundColor = '#382b20'; }}
            onMouseLeave={(e) => { if (!isSending) e.currentTarget.style.backgroundColor = '#241b14'; }}
          >
            {isSending ? (
              <>
                <Loader2 style={{ width: '14px', height: '14px', animation: 'spin 1s linear infinite' }} />
                <span>{t.contact.sending}</span>
              </>
            ) : isSent ? (
              <>
                <CheckCircle2 style={{ width: '14px', height: '14px', color: '#3ea562' }} />
                <span>{t.contact.sentSuccess}</span>
              </>
            ) : (
              <>
                <Send style={{ width: '13px', height: '13px', color: '#c88a58' }} />
                <span>{t.contact.sendMessage}</span>
              </>
            )}
          </button>
        </form>

        {/* Direct Channels Box */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: '#f5efe4', border: '1px solid #e5dacf', borderRadius: '14px', padding: '16px' }}>
          <span className="font-mono-code" style={{ fontSize: '9.5px', fontWeight: '700', letterSpacing: '0.15em', color: '#7a7063', textTransform: 'uppercase' }}>
            {t.contact.directTitle}
          </span>

          {/* Email */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', borderRadius: '8px', backgroundColor: '#fdfbf7', border: '1px solid #e2d7c9' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail style={{ width: '14px', height: '14px', color: '#a86f3e' }} />
              <span className="font-mono-code" style={{ fontSize: '11px', fontWeight: '600', color: '#1c1b18' }}>m.metwally.rzq@gmail.com</span>
            </div>
            <button
              type="button"
              onClick={copyEmail}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px', color: '#6d685e' }}
              title="Copy Email"
            >
              {copiedEmail ? <CheckCircle2 style={{ width: '13px', height: '13px', color: '#3ea562' }} /> : <Copy style={{ width: '13px', height: '13px' }} />}
            </button>
          </div>

          {/* Phone */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', borderRadius: '8px', backgroundColor: '#fdfbf7', border: '1px solid #e2d7c9' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone style={{ width: '14px', height: '14px', color: '#a86f3e' }} />
              <span className="font-mono-code" style={{ fontSize: '11px', fontWeight: '600', color: '#1c1b18' }}>+20 102 134 0475</span>
            </div>
            <button
              type="button"
              onClick={copyPhone}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px', color: '#6d685e' }}
              title="Copy Phone"
            >
              {copiedPhone ? <CheckCircle2 style={{ width: '13px', height: '13px', color: '#3ea562' }} /> : <Copy style={{ width: '13px', height: '13px' }} />}
            </button>
          </div>

          {/* Website */}
          <a
            href="https://mohammed-metwally.web.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', borderRadius: '8px', backgroundColor: '#fdfbf7', border: '1px solid #e2d7c9', fontSize: '11px', fontWeight: '600', color: '#1c1b18', textDecoration: 'none' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Globe style={{ width: '14px', height: '14px', color: '#a86f3e' }} />
              <span className="font-mono-code">mohammed-metwally.web.app</span>
            </div>
            <span style={{ color: '#8c867a' }}>↗</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/mohamed-metwally-rzq"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', borderRadius: '8px', backgroundColor: '#fdfbf7', border: '1px solid #e2d7c9', fontSize: '11px', fontWeight: '600', color: '#1c1b18', textDecoration: 'none' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '15px', height: '15px', borderRadius: '3px', backgroundColor: '#0077b5', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 'bold' }}>in</div>
              <span>linkedin.com/in/mohamed-metwally-rzq</span>
            </div>
            <span style={{ color: '#8c867a' }}>↗</span>
          </a>

          {/* Location */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 10px', borderRadius: '8px', backgroundColor: '#fdfbf7', border: '1px solid #e2d7c9', fontSize: '11px', color: '#403d38' }}>
            <MapPin style={{ width: '14px', height: '14px', color: '#a86f3e' }} />
            <span>{t.contact.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

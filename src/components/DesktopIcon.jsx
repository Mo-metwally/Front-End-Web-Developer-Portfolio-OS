import React from 'react';
import { User, Scan, Award } from 'lucide-react';
import LogoImg from '../assets/Logo.png';

export default function DesktopIcon({ id, label, iconType, isHome, isOpen, onClick }) {
  const renderIcon = () => {
    if (isHome) {
      return (
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #d29864 0%, #ba7e4a 100%)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.65)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            transition: 'transform 0.18s ease'
          }}
          className="group-hover:scale-105"
        >
          <img
            src={LogoImg}
            alt="Home"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: 'scale(1.18)'
            }}
          />
        </div>
      );
    }

    if (iconType === 'about') {
      return (
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '14px',
            backgroundColor: '#f5ede3',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.65)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.18s ease'
          }}
          className="group-hover:scale-105"
        >
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#382618' }}>
            <Scan style={{ width: '24px', height: '24px', strokeWidth: '1.8' }} />
            <User style={{ width: '13px', height: '13px', position: 'absolute', fill: '#382618', stroke: 'none' }} />
          </div>
        </div>
      );
    }

    if (iconType === 'certificates') {
      return (
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #f0e6d6 0%, #e2d2bd 100%)',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.65)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#a86f3e',
            transition: 'transform 0.18s ease'
          }}
          className="group-hover:scale-105"
        >
          <Award style={{ width: '26px', height: '26px', strokeWidth: '2' }} />
        </div>
      );
    }

    if (iconType === 'clients') {
      return (
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '14px',
            backgroundColor: '#d2ded8',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.65)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.18s ease'
          }}
          className="group-hover:scale-105"
        >
          <div style={{ width: '24px', height: '24px', borderRadius: '4px', border: '1.8px solid #22332a', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '3px', padding: '2px' }}>
            <div style={{ width: '14px', height: '2px', backgroundColor: '#22332a', borderRadius: '2px' }} />
            <div style={{ width: '14px', height: '2px', backgroundColor: '#22332a', borderRadius: '2px' }} />
            <div style={{ width: '8px', height: '2px', backgroundColor: '#22332a', borderRadius: '2px', alignSelf: 'flex-start', marginLeft: '2px' }} />
          </div>
        </div>
      );
    }

    if (iconType === 'projects') {
      return (
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '14px',
            backgroundColor: '#e8d5be',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.65)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.18s ease'
          }}
          className="group-hover:scale-105"
        >
          <div style={{ width: '24px', height: '20px', borderRadius: '4px', border: '1.8px solid #422d1d', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', border: '1.8px solid #422d1d' }} />
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <button
      onClick={onClick}
      className="group"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        padding: '4px',
        borderRadius: '12px',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        userSelect: 'none',
        textAlign: 'center',
        outline: 'none'
      }}
    >
      {renderIcon()}
      <span className="desktop-icon-label" style={{ fontSize: '11px', fontWeight: '500', color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.9)', padding: '0 4px' }}>
        {label}
      </span>
    </button>
  );
}

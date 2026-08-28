import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

export default function TerminalWindowContent({ openApp }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'MM/OS Shell v2.6.4 (darwin-arm64)' },
    { type: 'system', text: 'Type "help" to see available commands or "skills" to view technologies.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    const cmd = inputVal.trim();
    if (!cmd) return;

    const newHistory = [...history, { type: 'input', text: `guest@metwally:~$ ${cmd}` }];
    const lower = cmd.toLowerCase();

    if (lower === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (lower === 'help') {
      newHistory.push({
        type: 'output',
        text: `Available Commands:
  • help       - List available commands
  • about      - Read Mohamed's professional bio & education
  • projects   - View 8 featured projects & client websites
  • skills     - Print core Front-End & Back-End stack
  • experience - Display career at Missan Elmaharya & Freelance
  • contact    - Display email, phone, website & LinkedIn
  • date       - Show current timestamp
  • clear      - Clear terminal window`
      });
    } else if (lower === 'about') {
      newHistory.push({
        type: 'output',
        text: `MOHAMED METWALLY\nFront-End Web Developer (with Solid Back-End Background)\nEducation: B.Sc in Computer & Information Systems (C.I.S) - Alexandria University (2018-2022)\nCertifications: Meta Front-End Developer Nanodegree · Egypt FWD · IBM React`
      });
      openApp('about');
    } else if (lower === 'skills') {
      newHistory.push({
        type: 'output',
        text: `[FRONT-END & STYLING]\n• Next.js, React.js, JavaScript (ES6+), HTML5, CSS3, jQuery, GSAP\n• Tailwind CSS, Bootstrap, Styled-Components, Figma, Adobe XD\n\n[BACK-END (BACKGROUND)]\n• Node.js, Express.js, RESTful APIs, Server Architecture, Databases`
      });
    } else if (lower === 'experience' || lower === 'exp') {
      newHistory.push({
        type: 'output',
        text: `[WORK EXPERIENCE]\n1. Front-End Web Developer @ Missan Elmaharya (March 2022 - Present)\n2. Freelance Front-End Developer & UI Designer (March 2022 - Present)`
      });
      openApp('clients');
    } else if (lower === 'projects') {
      newHistory.push({
        type: 'output',
        text: `FEATURED CLIENT WORK (8 Projects):\n1. Entity Agency (Graduation Project)\n2. Hamasat Home (E-Commerce)\n3. Premium Agency (Creative Agency)\n4. EDU Weaver (EdTech Platform)\n5. Ramis Hotel (Hospitality Booking)\n6. Lawyer Website (Legal Consulting)\n7. Missan Al-Mahariya (Technical Services)\n8. TrendLine E-Commerce (Security & Retail)`
      });
      openApp('projects');
    } else if (lower === 'contact') {
      newHistory.push({
        type: 'output',
        text: `Phone: +201021340475\nEmail: m.metwally.rzq@gmail.com\nWebsite: https://mohammed-metwally.web.app\nLinkedIn: https://linkedin.com/in/mohamed-metwally-rzq\nLocation: Alexandria, Egypt`
      });
      openApp('contact');
    } else if (lower === 'date') {
      newHistory.push({
        type: 'output',
        text: new Date().toString()
      });
    } else {
      newHistory.push({
        type: 'error',
        text: `zsh: command not found: ${cmd}. Type "help" for a list of commands.`
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <div className="font-mono-code" style={{ height: '100%', backgroundColor: '#14110f', color: '#e8e2d8', fontSize: '13px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflowY: 'auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {history.map((item, idx) => (
          <div key={idx} style={{ lineHeight: '1.5' }}>
            {item.type === 'system' && (
              <span style={{ color: '#918679' }}>{item.text}</span>
            )}
            {item.type === 'input' && (
              <span style={{ color: '#c88a58', fontWeight: 'bold' }}>{item.text}</span>
            )}
            {item.type === 'output' && (
              <pre style={{ color: '#98cbb4', whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>{item.text}</pre>
            )}
            {item.type === 'error' && (
              <span style={{ color: '#ea7369' }}>{item.text}</span>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '16px' }}>
        <span style={{ color: '#c88a58', fontWeight: 'bold' }}>guest@metwally:~$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleCommand}
          placeholder="type a command..."
          style={{ flex: 1, backgroundColor: 'transparent', color: '#faf9f7', outline: 'none', border: 'none', fontFamily: 'inherit', fontSize: '13px' }}
        />
      </div>
    </div>
  );
}

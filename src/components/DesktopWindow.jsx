import React, { useState, useRef, useEffect } from 'react';
import { Minus, X, Maximize2, Minimize2 } from 'lucide-react';

export default function DesktopWindow({
  id,
  title,
  isOpen,
  isMinimized,
  zIndex,
  initialPosition = { x: 100, y: 80 },
  defaultSize = { width: 760, height: 500 },
  onClose,
  onMinimize,
  onFocus,
  onMaximizeChange,
  children
}) {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(defaultSize);
  const [isMaximized, setIsMaximized] = useState(false);
  const [preMaxState, setPreMaxState] = useState({ pos: initialPosition, size: defaultSize });
  const [isDragging, setIsDragging] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isMinimizing, setIsMinimizing] = useState(false);
  const dragRef = useRef({ startX: 0, startY: 0, initialPosX: 0, initialPosY: 0 });

  useEffect(() => {
    if (!isMaximized) {
      setPosition(initialPosition);
      setSize(defaultSize);
      setPreMaxState({ pos: initialPosition, size: defaultSize });
    }
  }, [initialPosition.x, initialPosition.y, defaultSize.width, defaultSize.height]);

  const handleMouseDown = () => {
    onFocus(id);
  };

  const handleHeaderMouseDown = (e) => {
    if (e.target.closest('.traffic-light-btn')) return;
    onFocus(id);

    // If maximized and user starts dragging header -> restore to previous size & position under mouse
    if (isMaximized) {
      const restoredSize = preMaxState?.size || defaultSize;
      const clickRatio = Math.max(0.15, Math.min(0.85, e.clientX / window.innerWidth));
      const newX = Math.max(10, Math.min(window.innerWidth - restoredSize.width - 10, e.clientX - (restoredSize.width * clickRatio)));
      const newY = Math.max(40, e.clientY - 20);

      setPosition({ x: newX, y: newY });
      setSize(restoredSize);
      setIsMaximized(false);
      if (onMaximizeChange) onMaximizeChange(id, false);

      setIsDragging(true);
      dragRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        initialPosX: newX,
        initialPosY: newY
      };
      return;
    }

    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialPosX: position.x,
      initialPosY: position.y
    };
  };

  // Touch Drag Support for Mobile & Tablets
  const handleTouchStart = (e) => {
    if (e.target.closest('.traffic-light-btn')) return;
    onFocus(id);
    if (!e.touches || e.touches.length === 0) return;
    const touch = e.touches[0];

    setIsDragging(true);
    dragRef.current = {
      startX: touch.clientX,
      startY: touch.clientY,
      initialPosX: position.x,
      initialPosY: position.y
    };
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - dragRef.current.startX;
      const deltaY = e.clientY - dragRef.current.startY;

      const currentWidth = isMaximized ? window.innerWidth : (size?.width || defaultSize.width);
      const newX = Math.max(0, Math.min(window.innerWidth - currentWidth, dragRef.current.initialPosX + deltaX));
      const newY = Math.max(36, Math.min(window.innerHeight - 80, dragRef.current.initialPosY + deltaY));

      setPosition({ x: newX, y: newY });
    };

    const handleTouchMove = (e) => {
      if (!isDragging || !e.touches || e.touches.length === 0) return;
      const touch = e.touches[0];
      const deltaX = touch.clientX - dragRef.current.startX;
      const deltaY = touch.clientY - dragRef.current.startY;

      const currentWidth = isMaximized ? window.innerWidth : (size?.width || defaultSize.width);
      const newX = Math.max(0, Math.min(window.innerWidth - currentWidth, dragRef.current.initialPosX + deltaX));
      const newY = Math.max(36, Math.min(window.innerHeight - 80, dragRef.current.initialPosY + deltaY));

      setPosition({ x: newX, y: newY });
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleEnd);
      window.addEventListener('touchcancel', handleEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
      window.removeEventListener('touchcancel', handleEnd);
    };
  }, [isDragging, isMaximized, size, defaultSize]);

  // Maximize / Restore Window
  const toggleMaximize = () => {
    if (isMaximized) {
      if (preMaxState) {
        setPosition(preMaxState.pos);
        setSize(preMaxState.size);
      }
      setIsMaximized(false);
      if (onMaximizeChange) onMaximizeChange(id, false);
    } else {
      setPreMaxState({ pos: position, size: size || defaultSize });
      setIsMaximized(true);
      if (onMaximizeChange) onMaximizeChange(id, true);
    }
  };

  // Close handler with smooth animation
  const handleClose = () => {
    if (isClosing || isMinimizing) return;
    setIsClosing(true);
    setTimeout(() => {
      if (isMaximized && onMaximizeChange) {
        onMaximizeChange(id, false);
      }
      onClose(id);
      setIsClosing(false);
    }, 150);
  };

  // Minimize handler with smooth scale & drop animation
  const handleMinimize = () => {
    if (isClosing || isMinimizing) return;
    setIsMinimizing(true);
    setTimeout(() => {
      if (isMaximized && onMaximizeChange) {
        onMaximizeChange(id, false);
      }
      onMinimize(id);
      setIsMinimizing(false);
    }, 200);
  };

  if (!isOpen || isMinimized) return null;

  const computedWidth = isMaximized ? '100vw' : `${Math.min(defaultSize.width, typeof window !== 'undefined' ? window.innerWidth - 16 : 800)}px`;
  const computedHeight = isMaximized ? 'calc(100vh - 36px)' : `${Math.min(defaultSize.height, typeof window !== 'undefined' ? window.innerHeight - 90 : 600)}px`;

  return (
    <div
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      style={{
        position: isMaximized ? 'fixed' : 'absolute',
        top: isMaximized ? '36px' : `${position.y}px`,
        left: isMaximized ? 0 : `${position.x}px`,
        width: computedWidth,
        height: computedHeight,
        borderRadius: isMaximized ? '0px' : '14px',
        zIndex: zIndex,
        boxShadow: isMaximized ? 'none' : '0 35px 90px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(0, 0, 0, 0.12)',
        transition: isDragging ? 'none' : 'top 0.22s cubic-bezier(0.16, 1, 0.3, 1), left 0.22s cubic-bezier(0.16, 1, 0.3, 1), width 0.22s cubic-bezier(0.16, 1, 0.3, 1), height 0.22s cubic-bezier(0.16, 1, 0.3, 1), border-radius 0.2s ease, box-shadow 0.2s ease'
      }}
      className={`mac-window-container select-auto ${isClosing ? 'mac-window-closing' : isMinimizing ? 'mac-window-minimizing' : 'mac-window-opening'}`}
    >
      {/* Title Bar */}
      <div
        onMouseDown={handleHeaderMouseDown}
        onTouchStart={handleTouchStart}
        onDoubleClick={toggleMaximize}
        className="mac-window-header"
        style={{
          borderTopLeftRadius: isMaximized ? '0px' : '14px',
          borderTopRightRadius: isMaximized ? '0px' : '14px',
          cursor: isDragging ? 'grabbing' : 'grab',
          touchAction: 'none'
        }}
      >
        <div className="flex items-center gap-2 group">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className="traffic-light-btn traffic-red"
            title="Close"
          >
            <X className="w-2.5 h-2.5 text-[#4c0000] opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleMinimize();
            }}
            className="traffic-light-btn traffic-yellow"
            title="Minimize"
          >
            <Minus className="w-2.5 h-2.5 text-[#5c3e00] opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMaximize();
            }}
            className="traffic-light-btn traffic-green"
            title={isMaximized ? 'Restore' : 'Maximize'}
          >
            {isMaximized ? (
              <Minimize2 className="w-2.5 h-2.5 text-[#004d0f] opacity-0 group-hover:opacity-100 transition-opacity" />
            ) : (
              <Maximize2 className="w-2.5 h-2.5 text-[#004d0f] opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </button>
        </div>

        <div className="text-[12px] font-semibold text-[#4a4742] tracking-tight truncate max-w-[280px] sm:max-w-[360px]">
          {title}
        </div>

        <div className="w-14" />
      </div>

      {/* Content Area */}
      <div
        className="mac-window-content"
        style={{
          height: 'calc(100% - 38px)',
          overflowY: 'auto',
          paddingBottom: id === 'terminal' ? '0px' : '100px'
        }}
      >
        {children}
      </div>
    </div>
  );
}

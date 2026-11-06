import React from 'react';
import { PageContent, PAGE_THEMES } from '../types';
import { Quote } from 'lucide-react';

export const PageContentRenderer: React.FC<{ page: PageContent }> = ({ page }) => {
  const theme = PAGE_THEMES.find(t => t.id === page.themeId) || PAGE_THEMES[0];

  const wrapperStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    background: theme.bg,
    color: theme.text,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  if (page.templateId === 'ANNOUNCEMENT') {
    return (
      <div style={wrapperStyle}>
        {page.imageUrl && (
          <>
            <img src={page.imageUrl} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }} />
            <div style={{ position: 'absolute', inset: 0, background: theme.bg, opacity: 0.55 }} />
          </>
        )}
        <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '6% 8%' }}>
          <div style={{ width: 64, height: 5, borderRadius: 999, background: theme.accent, marginBottom: '3%' }} />
          <div style={{ fontSize: 'clamp(28px, 6vw, 76px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: '90%' }}>
            {page.headline || 'Your Headline �ۧq˞�
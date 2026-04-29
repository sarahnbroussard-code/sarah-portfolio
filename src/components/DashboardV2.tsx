export function DashboardV2() {
  return (
    <div className="dashboard-v2" style={{
      background: '#080810',
      color: '#F4F3FF',
      fontFamily: "'Inter', sans-serif",
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Ambient Light */}
      <div style={{
        position: 'fixed',
        width: '560px',
        height: '560px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,92,0,.14), transparent 70%)',
        top: '-180px',
        left: '-80px',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'fixed',
        width: '480px',
        height: '480px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(138,63,252,.12), transparent 70%)',
        bottom: '-120px',
        right: '-80px',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      {/* Shell */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* Topbar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          height: '56px',
          background: 'rgba(17,17,32,.85)',
          backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          flexShrink: 0,
        }}>
          <div style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontStyle: 'italic',
            fontSize: '22px',
            letterSpacing: '-0.5px',
            color: '#FF5C00',
          }}>
            Sweat<span style={{ color: '#27E2A4' }}>Pals</span>
          </div>

          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', gap: '2px', background: '#181830', borderRadius: '10px', padding: '3px' }}>
              {['Overview', 'Pals', 'Events', 'Revenue'].map((tab, i) => (
                <button key={i} style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: '11px',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  color: i === 0 ? '#F4F3FF' : '#9896C8',
                  background: i === 0 ? '#2A2A48' : 'none',
                  transition: 'all .2s',
                }}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              background: 'rgba(255,92,0,.15)',
              border: '1px solid rgba(255,92,0,.4)',
              borderRadius: '100px',
              padding: '5px 12px',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
              color: '#FF5C00',
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF5C00' }} />
              Live
            </div>
            <div style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: '10px',
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              background: 'linear-gradient(135deg, #8A3FFC, #B47FFF)',
              color: '#fff',
              borderRadius: '6px',
              padding: '4px 9px',
            }}>
              Pro
            </div>
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              background: '#FF5C00',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              padding: '8px 16px',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: '0 0 24px rgba(255,92,0,.45)',
            }}>
              ⚡ Huddle
            </button>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FF5C00, #8A3FFC)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: '12px',
              cursor: 'pointer',
              flexShrink: 0,
            }}>
              JR
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div style={{
          height: '30px',
          overflow: 'hidden',
          background: 'rgba(138,63,252,.08)',
          borderBottom: '1px solid rgba(138,63,252,.2)',
          display: 'flex',
          alignItems: 'center',
          flexShrink: 0,
        }}>
          <div style={{
            display: 'flex',
            animation: 'scroll-x 28s linear infinite',
            whiteSpace: 'nowrap',
          }}>
            <span style={{ fontSize: '11px', padding: '0 28px', color: '#9896C8', fontWeight: 500 }}>
              <b style={{ color: '#F4F3FF' }}>Sarah M.</b> just RSVP'd for Beach Yoga 🏖️
            </span>
            <span style={{ fontSize: '11px', padding: '0 28px', color: '#9896C8', fontWeight: 500 }}>
              <span style={{ color: '#8A3FFC', fontWeight: 700 }}>★ DISCOVERY</span> — New Pal found you on the Map!
            </span>
            <span style={{ fontSize: '11px', padding: '0 28px', color: '#9896C8', fontWeight: 500 }}>
              <b style={{ color: '#F4F3FF' }}>Alex K.</b> checked in · <span style={{ color: '#FF5C00', fontWeight: 700 }}>5-run streak!</span>
            </span>
          </div>
        </div>

        {/* Body */}
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          {/* Sidebar */}
          <div style={{
            width: '58px',
            flexShrink: 0,
            borderRight: '1px solid rgba(255,255,255,0.07)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '16px 0',
            gap: '6px',
          }}>
            {['📊', '👥', '📅', '💰', '⚙️'].map((icon, i) => (
              <div key={i} style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                cursor: 'pointer',
                background: i === 0 ? 'rgba(255,92,0,.15)' : 'transparent',
                position: 'relative',
              }}>
                {icon}
                {i === 0 && (
                  <div style={{
                    position: 'absolute',
                    left: '-1px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '3px',
                    height: '20px',
                    borderRadius: '0 3px 3px 0',
                    background: '#FF5C00',
                  }} />
                )}
              </div>
            ))}
          </div>

          {/* Main Panel */}
          <div style={{ flex: 1, padding: '18px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Top Stats Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
              {[
                { label: 'Active Pals', value: '47', delta: '+12%', color: '#27E2A4' },
                { label: 'Check-ins Today', value: '23', delta: '+8%', color: '#FF5C00' },
                { label: 'Events This Week', value: '8', delta: '+2', color: '#8A3FFC' },
              ].map((stat, i) => (
                <div key={i} style={{
                  background: '#111120',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '20px',
                  padding: '18px',
                }}>
                  <div style={{ fontSize: '13px', color: '#9896C8', fontWeight: 500, marginBottom: '8px' }}>{stat.label}</div>
                  <div style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 900,
                    fontStyle: 'italic',
                    fontSize: '52px',
                    lineHeight: 1,
                    letterSpacing: '-2px',
                    background: `linear-gradient(135deg, ${stat.color}, rgba(255,255,255,.5))`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '3px',
                    borderRadius: '100px',
                    padding: '2px 8px',
                    fontSize: '11px',
                    fontWeight: 700,
                    marginTop: '5px',
                    background: 'rgba(39,226,164,.12)',
                    color: '#27E2A4',
                  }}>
                    ↑ {stat.delta}
                  </div>
                </div>
              ))}
            </div>

            {/* Revenue Card */}
            <div style={{
              background: 'linear-gradient(140deg, rgba(138,63,252,.12) 0%, rgba(255,92,0,.06) 100%)',
              border: '1px solid rgba(138,63,252,.2)',
              borderRadius: '20px',
              padding: '18px',
            }}>
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: '10px',
                letterSpacing: '1.4px',
                textTransform: 'uppercase',
                color: '#5C5A80',
                marginBottom: '10px',
              }}>
                💰 Revenue This Week
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginTop: '4px' }}>
                {[
                  { label: 'Gross', value: '$1.2k', sub: 'Before fees' },
                  { label: 'Net', value: '$1.1k', sub: 'In your pocket' },
                  { label: 'Splits', value: '$124', sub: 'Co-host share' },
                ].map((item, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: '#5C5A80', marginBottom: '3px', fontWeight: 600 }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 900,
                      fontStyle: 'italic',
                      fontSize: '30px',
                      lineHeight: 1,
                      background: i === 0 ? 'linear-gradient(135deg, #F4F3FF, rgba(255,255,255,.7))' : i === 1 ? 'linear-gradient(135deg, #27E2A4, #88F0D0)' : 'linear-gradient(135deg, #8A3FFC, #C48FFF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                      {item.value}
                    </div>
                    <div style={{ fontSize: '10px', color: '#5C5A80', marginTop: '2px' }}>{item.sub}</div>
                  </div>
                ))}
              </div>
              {/* Goal Bar */}
              <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <div style={{ fontSize: '11px', color: '#9896C8', fontWeight: 500 }}>Goal: $1,500</div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#27E2A4' }}>73%</div>
                </div>
                <div style={{ height: '6px', background: '#20203A', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', borderRadius: '10px', background: 'linear-gradient(90deg, #8A3FFC, #27E2A4)', width: '73%' }} />
                </div>
              </div>
            </div>

            {/* Two-column row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {/* Leader Pipeline */}
              <div style={{ background: '#111120', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '18px' }}>
                <div style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: '10px',
                  letterSpacing: '1.4px',
                  textTransform: 'uppercase',
                  color: '#5C5A80',
                  marginBottom: '12px',
                }}>
                  🏆 Leader Pipeline
                </div>
                {[
                  { rank: 1, name: 'Alex K.', score: '147', color: '#FFD700' },
                  { rank: 2, name: 'Sarah M.', score: '134', color: '#B0AECE' },
                  { rank: 3, name: 'Jamie L.', score: '128', color: '#CD7F32' },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 0',
                    borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  }}>
                    <div style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 800,
                      fontSize: '16px',
                      width: '18px',
                      textAlign: 'center',
                      flexShrink: 0,
                      color: item.color,
                    }}>
                      {item.rank}
                    </div>
                    <div style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 800,
                      fontSize: '11px',
                      background: `linear-gradient(135deg, ${item.color}, rgba(255,255,255,0.3))`,
                    }}>
                      {item.name.charAt(0)}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '13px', fontWeight: 600 }}>{item.name}</div>
                      <div style={{ fontSize: '10px', color: '#5C5A80' }}>Engaged leader</div>
                    </div>
                    <div style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 900,
                      fontSize: '18px',
                      color: '#27E2A4',
                    }}>
                      {item.score}
                    </div>
                  </div>
                ))}
              </div>

              {/* Churn Risk */}
              <div style={{
                background: 'linear-gradient(160deg, rgba(255,92,0,.07), #111120)',
                border: '1px solid rgba(255,92,0,.2)',
                borderRadius: '20px',
                padding: '18px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <div style={{ fontSize: '18px' }}>⚠️</div>
                  <div>
                    <div style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 800,
                      fontSize: '12px',
                      letterSpacing: '0.8px',
                      textTransform: 'uppercase',
                      color: '#FF5C00',
                    }}>
                      No Pal Left Behind
                    </div>
                    <div style={{ fontSize: '10px', color: '#5C5A80' }}>At-risk Pals</div>
                  </div>
                </div>
                {['Marcus T.', 'Elena R.', 'David P.'].map((name, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '7px 0',
                    borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 800,
                      fontSize: '10px',
                      background: 'linear-gradient(135deg, #FF5C00, rgba(255,255,255,0.2))',
                      opacity: 0.7,
                    }}>
                      {name.charAt(0)}
                    </div>
                    <div style={{ flex: 1, fontSize: '12px', fontWeight: 600 }}>{name}</div>
                    <div style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      background: 'rgba(255,92,0,.15)',
                      color: '#FF5C00',
                      borderRadius: '6px',
                      padding: '2px 7px',
                    }}>
                      21d
                    </div>
                    <button style={{
                      background: 'none',
                      border: '1px solid rgba(255,92,0,.4)',
                      color: '#FF5C00',
                      borderRadius: '100px',
                      padding: '3px 10px',
                      fontSize: '10px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      letterSpacing: '0.4px',
                    }}>
                      Ping
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Activity Spine */}
          <div style={{
            width: '316px',
            flexShrink: 0,
            borderLeft: '1px solid rgba(255,255,255,0.07)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}>
            <div style={{
              padding: '14px 16px 10px',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              flexShrink: 0,
            }}>
              <div style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: '13px',
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
              }}>
                Activity Feed
              </div>
            </div>
            <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px' }}>
              {[
                { name: 'Sarah M.', action: 'RSVP\'d for Beach Yoga', badge: 'RSVP', color: '#27E2A4' },
                { name: 'Alex K.', action: 'checked in to Morning Run', badge: 'CHECK-IN', color: '#FF5C00' },
                { name: 'Jamie L.', action: 'found you on the map', badge: 'DISCOVERY', color: '#8A3FFC' },
                { name: 'Marcus T.', action: 'joined your community', badge: 'NEW', color: '#FFD700' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  padding: '11px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    fontSize: '11px',
                    background: `linear-gradient(135deg, ${item.color}, rgba(255,255,255,0.2))`,
                  }}>
                    {item.name.charAt(0)}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '12px', lineHeight: 1.45, color: '#9896C8' }}>
                      <strong style={{ color: '#F4F3FF', fontWeight: 600 }}>{item.name}</strong> {item.action}
                    </div>
                    <div style={{ fontSize: '10px', color: '#5C5A80', marginTop: '2px' }}>2 min ago</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700;1,800;1,900&family=Inter:wght@400;500;600;700&display=swap');
        @keyframes scroll-x {
          from { transform: translateX(0) }
          to { transform: translateX(-50%) }
        }
      `}</style>
    </div>
  );
}

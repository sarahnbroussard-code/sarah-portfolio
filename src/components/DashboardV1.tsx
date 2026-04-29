export function DashboardV1() {
  return (
    <div className="dashboard-v1" style={{
      background: '#0A0A0F',
      color: '#F0EFF8',
      fontFamily: "'DM Sans', sans-serif",
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Ambient Glows */}
      <div style={{
        position: 'fixed',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,92,0,0.12) 0%, transparent 70%)',
        top: '-200px',
        left: '-100px',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      <div style={{
        position: 'fixed',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(138,63,252,0.10) 0%, transparent 70%)',
        bottom: '-150px',
        right: '-100px',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Main Shell */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* Top Nav */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 28px',
          background: 'rgba(18,18,26,0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px', letterSpacing: '1px', color: '#FF5C00' }}>
              Sweat<span style={{ color: '#27E2A4' }}>Pals</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255,92,0,0.15)',
              border: '1px solid rgba(255,92,0,0.4)',
              borderRadius: '100px',
              padding: '4px 12px 4px 8px',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '1px',
              color: '#FF5C00',
              textTransform: 'uppercase',
            }}>
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#FF5C00' }} />
              Live
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              background: 'rgba(255,92,0,0.1)',
              border: '1px solid rgba(255,92,0,0.25)',
              borderRadius: '100px',
              padding: '5px 12px',
              fontSize: '13px',
              fontWeight: 600,
              color: '#FFAA44',
            }}>
              🔥 14-Day Streak
            </div>
            <button style={{
              background: 'linear-gradient(135deg, #FF5C00, #FF8C00)',
              color: '#fff',
              border: 'none',
              borderRadius: '100px',
              padding: '8px 18px',
              fontSize: '13px',
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '0.3px',
              boxShadow: '0 0 20px rgba(255,92,0,0.4)',
            }}>
              ⚡ Launch Huddle View
            </button>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FF5C00, #8A3FFC)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '13px',
              cursor: 'pointer',
            }}>
              JR
            </div>
          </div>
        </nav>

        {/* Ticker */}
        <div style={{
          background: 'rgba(138,63,252,0.1)',
          borderTop: '1px solid rgba(138,63,252,0.2)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          overflow: 'hidden',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          flexShrink: 0,
        }}>
          <div style={{
            display: 'flex',
            gap: 0,
            animation: 'ticker-scroll 30s linear infinite',
            whiteSpace: 'nowrap',
          }}>
            <span style={{ fontSize: '11px', fontWeight: 600, padding: '0 32px', color: '#7A7994' }}>
              <strong style={{ color: '#27E2A4' }}>Sarah M.</strong> just RSVP'd for Beach Yoga 🏖️
            </span>
            <span style={{ fontSize: '11px', fontWeight: 600, padding: '0 32px', color: '#7A7994' }}>
              <span style={{ color: '#8A3FFC', fontWeight: 700 }}>★ DISCOVERY</span> — New Pal found you on the Map!
            </span>
            <span style={{ fontSize: '11px', fontWeight: 600, padding: '0 32px', color: '#7A7994' }}>
              <strong style={{ color: '#27E2A4' }}>Alex K.</strong> checked in · <span style={{ color: '#FF5C00', fontWeight: 700 }}>5-run streak!</span>
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          {/* Left Column */}
          <div style={{
            width: '260px',
            flexShrink: 0,
            padding: '20px 16px',
            borderRight: '1px solid rgba(255,255,255,0.07)',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}>
            {/* Pals Moving Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255,92,0,0.12), rgba(255,140,0,0.05))',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.07)',
              padding: '18px',
            }}>
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#7A7994', marginBottom: '10px' }}>
                ⚡ Pals Moving Now
              </div>
              <div style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '72px',
                lineHeight: 1,
                background: 'linear-gradient(135deg, #FF5C00, #FFB347)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                47
              </div>
              <div style={{ fontSize: '12px', color: '#7A7994', marginTop: '4px' }}>active right now</div>
            </div>

            {/* Streak Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255,92,0,0.08), rgba(255,160,0,0.05))',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.07)',
              padding: '20px 18px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '48px', lineHeight: 1 }}>🔥</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '42px', color: '#FF5C00', lineHeight: 1, marginTop: '4px' }}>
                14
              </div>
              <div style={{ fontSize: '11px', color: '#7A7994', marginTop: '4px' }}>day streak</div>
              <div style={{
                display: 'inline-block',
                marginTop: '10px',
                background: 'linear-gradient(135deg, #FF5C00, #FF8C00)',
                color: '#fff',
                borderRadius: '100px',
                padding: '4px 14px',
                fontSize: '13px',
                fontWeight: 700,
              }}>
                2X MULTIPLIER
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Top Stats Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px' }}>
              <div style={{ background: '#12121A', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '14px' }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '30px', lineHeight: 1, color: '#27E2A4' }}>142</div>
                <div style={{ fontSize: '10px', color: '#7A7994', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '3px' }}>Total Pals</div>
              </div>
              <div style={{ background: '#12121A', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '14px' }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '30px', lineHeight: 1, color: '#FF5C00' }}>23</div>
                <div style={{ fontSize: '10px', color: '#7A7994', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '3px' }}>Check-ins</div>
              </div>
              <div style={{ background: '#12121A', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '14px' }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '30px', lineHeight: 1, color: '#8A3FFC' }}>8</div>
                <div style={{ fontSize: '10px', color: '#7A7994', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '3px' }}>Events</div>
              </div>
            </div>

            {/* Revenue Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(138,63,252,0.15), rgba(255,92,0,0.08))',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.07)',
              padding: '18px',
            }}>
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#7A7994', marginBottom: '10px' }}>
                💰 Revenue This Week
              </div>
              <div style={{ display: 'flex', gap: '24px', marginTop: '6px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: '#7A7994', marginBottom: '4px' }}>Gross</div>
                  <div style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '32px',
                    lineHeight: 1,
                    background: 'linear-gradient(135deg, #27E2A4, #60E8C0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    $1,247
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: '#7A7994', marginBottom: '4px' }}>Net</div>
                  <div style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '32px',
                    lineHeight: 1,
                    background: 'linear-gradient(135deg, #FF5C00, #FF8C44)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    $1,180
                  </div>
                </div>
              </div>
            </div>

            {/* Heatmap Card */}
            <div style={{
              background: '#12121A',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.07)',
              padding: '18px',
              minHeight: '180px',
            }}>
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#7A7994', marginBottom: '10px' }}>
                🌍 Discovery Heatmap
              </div>
              <div style={{
                width: '100%',
                height: '140px',
                borderRadius: '12px',
                background: '#1A1A26',
                position: 'relative',
                overflow: 'hidden',
                marginTop: '8px',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }} />
                {/* Heat spots */}
                <div style={{
                  position: 'absolute',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255,92,0,0.6), transparent)',
                  top: '30%',
                  left: '20%',
                }} />
                <div style={{
                  position: 'absolute',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(39,226,164,0.5), transparent)',
                  top: '45%',
                  right: '25%',
                }} />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div style={{
            width: '300px',
            flexShrink: 0,
            padding: '20px 16px',
            borderLeft: '1px solid rgba(255,255,255,0.07)',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}>
            {/* Activity Feed */}
            <div style={{
              background: '#12121A',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.07)',
              padding: '18px',
            }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#F0EFF8', marginBottom: '12px' }}>
                🎯 Activity Feed
              </div>
              {[
                { name: 'Sarah M.', action: 'RSVP\'d for Beach Yoga', badge: 'RSVP', color: '#27E2A4' },
                { name: 'Alex K.', action: 'checked in', badge: 'CHECK-IN', color: '#FF5C00' },
                { name: 'Jamie L.', action: 'found you on the map', badge: 'DISCOVERY', color: '#8A3FFC' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                }}>
                  <div style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${item.color}, rgba(255,255,255,0.2))`,
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 700,
                  }}>
                    {item.name.charAt(0)}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '13px', lineHeight: 1.5 }}>
                      <strong>{item.name}</strong> {item.action}
                    </div>
                    <div style={{ fontSize: '10px', color: '#7A7994', marginTop: '2px' }}>2 min ago</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Leaderboard */}
            <div style={{
              background: '#12121A',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.07)',
              padding: '18px',
            }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#F0EFF8', marginBottom: '12px' }}>
                🏆 Top Pals
              </div>
              {[
                { rank: 1, name: 'Alex K.', score: '147', color: '#FFD700' },
                { rank: 2, name: 'Sarah M.', score: '134', color: '#C0C0C0' },
                { rank: 3, name: 'Jamie L.', score: '128', color: '#CD7F32' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                }}>
                  <div style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '18px',
                    width: '22px',
                    flexShrink: 0,
                    color: item.color,
                  }}>
                    {item.rank}
                  </div>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${item.color}, rgba(255,255,255,0.3))`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}>
                    {item.name.charAt(0)}
                  </div>
                  <div style={{ flex: 1, fontSize: '13px', fontWeight: 600 }}>{item.name}</div>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '18px', color: '#27E2A4' }}>{item.score}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
